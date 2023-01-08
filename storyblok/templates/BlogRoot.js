import { useContext } from "react";
import { storyblokEditable } from "@storyblok/react";
import { GlobalContext } from "../../context/GlobalContext";
import StoryblokComponent from "..";
import BlogList from "../../components/BlogList";

const BlogRoot = ({ blok }) => {
  if (!blok?.hero?.length) return null;
  if (!blok?.body?.length) return null;

  const { blogPosts } = useContext(GlobalContext);

  return (
    <main {...storyblokEditable(blok)}>
      {blok.hero.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}

      <BlogList posts={blogPosts} />

      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default BlogRoot;
