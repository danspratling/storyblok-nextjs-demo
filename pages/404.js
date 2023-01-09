import { useStoryblokState, getStoryblokApi } from "@storyblok/react";
import { Layout } from "../components/Layout";
import StoryblokComponent from "../storyblok";
import { templates } from "../storyblok/templates";

const resolve_relations = [
  "project_section.projects",
  "testimonial_section.testimonial",
  "testimonial.project",
];

export default function Home({ story, config, footerCta, provider }) {
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

export async function getStaticProps() {
  const storyblokApi = getStoryblokApi();

  const storyblokParams = {
    version: "draft", // preview ? "draft" : "published",
    resolve_links: "url",
    resolve_relations,
  };

  const [page, config, footerCta, team, blogPosts] = await Promise.all([
    storyblokApi.get(`cdn/stories/error-pages/404`, storyblokParams),
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
