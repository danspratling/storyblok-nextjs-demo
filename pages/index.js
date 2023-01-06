import { Layout } from "../components/Layout";

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
  const storyblokApi = getStoryblokApi();

  const [page, config, footerCta, team, blogPosts, blogCategories] =
    await Promise.all([
      storyblokApi.get(`cdn/stories/${slug}`, {
        version: "draft", // or 'published'
        resolve_relations,
        resolve_links: "url",
      }),
      storyblokApi.get("cdn/stories/globals/site-config", {
        version: "draft",
        resolve_links: "url",
      }),
      storyblokApi.get("cdn/stories/globals/footer-cta", {
        version: "draft",
        resolve_links: "url",
      }),
      storyblokApi.get("cdn/stories", {
        version: "draft",
        content_type: "team_member",
        sort_by: "content.start_date:asc",
      }),
      storyblokApi.get("cdn/stories", {
        version: "draft",
        content_type: "blog_post",
        sort_by: "content.start_date:desc",
      }),
      storyblokApi.get("cdn/datasource_entries", {
        version: "draft",
        datasource: "blog-categories",
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
        blogCategories: blogCategories
          ? blogCategories.data.datasource_entries
          : [],
      },
    },
    revalidate: 3600, // revalidate every hour
  };
}
