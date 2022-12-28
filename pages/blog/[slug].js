import { Layout } from "../../components/Layout";
import { BlogArticle } from "../../storyblok/BlogArticle";
// import PeopleHero from "../../components/PeopleHero";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

const resolve_relations = [
  "project_section.projects",
  "testimonial_section.testimonial",
  "testimonial.project",
];

export default function BlogPost({ story, config }) {
  story = useStoryblokState(story, {
    resolve_relations,
  });
  config = useStoryblokState(config);

  return (
    <Layout blok={config.content}>
      {/* <BlogHero {...heroData} /> */}

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
