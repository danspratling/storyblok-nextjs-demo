import { Layout } from "../../components/Layout";
import { BlogHero } from "../../storyblok/BlogHero";
import { BlogArticle } from "../../storyblok/BlogArticle";

import { useStoryblokState, getStoryblokApi } from "@storyblok/react";

const resolve_relations = [
  "project_section.projects",
  "testimonial_section.testimonial",
  "testimonial.project",
  "blog_post.team_member",
];

export default function BlogPost({ story, config }) {
  story = useStoryblokState(story, {
    resolve_relations,
  });
  config = useStoryblokState(config);

  return (
    <Layout blok={config.content}>
      <BlogHero
        blok={story.content}
        publishDate={story.first_published_at}
        updatedDate={story.published_at}
      />
      <BlogArticle blok={story.content} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const storyblokApi = getStoryblokApi();
  const slug = params.slug;

  const [page, config] = await Promise.all([
    storyblokApi.get(`cdn/stories/blog/${slug}`, {
      version: "draft", // or 'published'
      resolve_relations,
      resolve_links: "url",
    }),
    storyblokApi.get("cdn/stories/site-config", {
      version: "draft",
      resolve_links: "url",
    }),
  ]);

  return {
    props: {
      key: page ? page.data.story.id : false,
      story: page ? page.data.story : false,
      config: config ? config.data.story : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/`, {
    version: "draft", // or 'published'
    starts_with: "blog",
  });

  const paths = await data.stories.map((story) => ({
    params: {
      slug: story.slug,
    },
  }));

  return { paths, fallback: false };
}
