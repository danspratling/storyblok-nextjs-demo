import Head from "next/head";
import { Layout } from "../../components/Layout";

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
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div>
        <h1>{story.content.title}</h1>
        <p>{story.content.description}</p>
      </div> */}

      {console.log(story.content)}

      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  // home is the default slug for the homepage in Storyblok
  let slug = params.slug;
  const storyblokApi = getStoryblokApi();

  const [page, config] = await Promise.all([
    storyblokApi.get(`cdn/stories/projects/${slug}`, {
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
    starts_with: "projects/",
    is_startpage: false,
  });

  const paths = await data.stories.map((story) => ({
    params: { slug: story.slug },
  }));

  return { paths, fallback: false };
}
