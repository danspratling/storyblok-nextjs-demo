import { Layout } from "../components/Layout";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

const resolve_relations = [
  "projects.projects",
  "testimonial_section.testimonial",
  "testimonial.project",
];

export default function Home({ story, config }) {
  story = useStoryblokState(story, {
    resolve_relations,
  });
  config = useStoryblokState(config);

  return (
    <Layout blok={config.content}>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const storyblokApi = getStoryblokApi();
  let slug = params.slug?.join("/");

  const [page, config] = await Promise.all([
    storyblokApi.get(`cdn/stories/${slug}`, {
      version: "draft", // or 'published'
      resolve_relations,
    }),
    storyblokApi.get("cdn/stories/site-config", {
      version: "draft",
      // resolve_links: 'url',
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
  });

  const paths = await data.stories.map((story) => ({
    params: {
      slug: story.full_slug.split("/"),
    },
  }));

  return { paths, fallback: false };
}
