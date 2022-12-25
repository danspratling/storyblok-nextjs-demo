import { Layout } from "../components/Layout";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

const resolve_relations = [
  "project_section.projects",
  "testimonial_section.testimonial",
  // "testimonial.project",
];

export default function Home({ story, config, provider }) {
  story = useStoryblokState(story, {
    resolve_relations,
  });
  config = useStoryblokState(config);

  return (
    <Layout blok={config.content} provider={provider}>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const storyblokApi = getStoryblokApi();
  const slug = params.slug?.join("/");

  const [page, config, team] = await Promise.all([
    storyblokApi.get(`cdn/stories/${slug}`, {
      version: "draft", // or 'published'
      resolve_relations,
      resolve_links: "url",
    }),
    storyblokApi.get("cdn/stories/site-config", {
      version: "draft",
      resolve_links: "url",
    }),
    storyblokApi.get("cdn/stories", {
      version: "draft",
      content_type: "team_member",
      sort_by: "content.start_date:asc",
    }),
  ]);

  return {
    props: {
      key: page ? page.data.story.id : false,
      story: page ? page.data.story : false,
      config: config ? config.data.story : false,
      provider: {
        teamMembers: team ? team.data.stories : [],
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

  const paths = await data.stories.map((story) => ({
    params: {
      slug: story.full_slug.split("/"),
    },
  }));

  return { paths, fallback: false };
}
