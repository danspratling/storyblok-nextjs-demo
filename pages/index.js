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

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  const storyblokApi = getStoryblokApi();

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
