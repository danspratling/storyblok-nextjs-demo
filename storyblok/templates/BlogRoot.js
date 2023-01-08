import { useContext } from "react";
import { storyblokEditable } from "@storyblok/react";
import { GlobalContext } from "../../context/GlobalContext";
import StoryblokComponent from "..";
import { sections } from "../sections";
import BlogList from "../../components/BlogList";

const BlogRoot = ({ blok }) => {
  const { blogPosts } = useContext(GlobalContext);

  if (!blok?.hero?.length) return null;
  if (!blok?.body?.length) return null;

  return (
    <main {...storyblokEditable(blok)}>
      {blok.hero.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          components={sections}
        />
      ))}

      <BlogList posts={blogPosts} />

      {blok.body.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          components={sections}
        />
      ))}
    </main>
  );
};

export default BlogRoot;
