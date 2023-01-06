// import { StoryblokComponent } from "@storyblok/react";
import BlogHero from "../BlogHero";
import BlogArticle from "../BlogArticle";

const BlogPost = ({ blok, first_published_at, published_at }) => {
  return (
    <main>
      <BlogHero
        blok={blok}
        publishDate={first_published_at}
        updatedDate={published_at}
      />

      <BlogArticle blok={blok} />

      {/* {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))} */}
    </main>
  );
};

export default BlogPost;
