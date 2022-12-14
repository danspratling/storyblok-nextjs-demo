import { useStoryblokState, getStoryblokApi } from "@storyblok/react";
import { Layout } from "../components/Layout";
import { templates } from "../storyblok/templates";
import StoryblokComponent from "../storyblok";

const resolve_relations = [
  "project_section.projects",
  "testimonial_section.testimonial",
];

export default function Page({ story, config, footerCta, provider }) {
  story = useStoryblokState(story, {
    resolve_relations,
  });
  config = useStoryblokState(config);

  return (
    <Layout
      story={story}
      blok={config.content}
      footerCta={footerCta.content}
      provider={provider}
    >
      <StoryblokComponent
        blok={story.content}
        components={templates}
        {...story}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  if (["error-pages", "globals"].some((path) => params.slug.includes(path))) {
    return {
      notFound: true,
    };
  }

  const storyblokApi = getStoryblokApi();
  const slug = params.slug?.join("/");

  const storyblokParams = {
    version: "draft", // preview ? "draft" : "published",
    resolve_links: "url",
    resolve_relations,
  };

  const [page, config, footerCta, team, blogPosts] = await Promise.all([
    storyblokApi.get(`cdn/stories/${slug}`, storyblokParams),
    storyblokApi.get("cdn/stories/globals/site-config", storyblokParams),
    storyblokApi.get("cdn/stories/globals/footer-cta", storyblokParams),
    storyblokApi.get("cdn/stories", {
      ...storyblokParams,
      content_type: "team_member",
      sort_by: "content.start_date:asc",
    }),
    storyblokApi.get("cdn/stories", {
      ...storyblokParams,
      content_type: "blog_post",
      sort_by: "content.start_date:desc",
    }),
  ]);

  return {
    props: {
      key: page ? page.data.story.id : false,
      story: page ? page.data.story : false,
      config: config ? config.data.story : false,
      footerCta: footerCta ? footerCta.data.story : false,
      provider: {
        teamMembers: team ? team.data.stories : [],
        blogPosts: blogPosts ? blogPosts.data.stories : [],
      },
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/`, {
    version: "draft", // or 'published'
    excluding_slugs: "site-config, team*",
  });

  // Test out if splitting this out is more performant.
  const paths = await data.stories
    .filter((story) => {
      return ["error-pages", "globals"].map((path) =>
        story.full_slug.split("/").includes(path)
      );
    })
    .map((story) => ({
      params: {
        slug: story.full_slug.split("/"),
      },
    }));

  return { paths, fallback: false };
}
