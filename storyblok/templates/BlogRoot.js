import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import BlogList from "../../components/BlogList";

const BlogRoot = ({ blok }) => {
  if (!blok?.hero?.length) return null;
  if (!blok?.body?.length) return null;

  return (
    <main {...storyblokEditable(blok)}>
      {blok.hero.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}

      <BlogList />

      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default BlogRoot;
