import { Layout } from "../components/Layout";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story, config }) {
  story = useStoryblokState(story);
  config = useStoryblokState(config);

  return (
    <Layout blok={config.content}>
      <h1>404 Page not found</h1>
      {/* <StoryblokComponent blok={story.content} /> */}
    </Layout>
  );
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  const storyblokApi = getStoryblokApi();

  const [page, config] = await Promise.all([
    storyblokApi.get(`cdn/stories/home`, {
      version: "draft", // or 'published'
    }),
    storyblokApi.get("cdn/stories/globals/site-config", {
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
