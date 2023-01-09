import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import BlogCard from "../../components/BlogCard";
import BlogCategories from "./BlogCategories";

const BlogList = ({ posts }) => {
  const router = useRouter();
  const blogCategories = useMemo(
    () => [...new Set(posts.map((post) => post.content.category))],
    [posts]
  );

  const [currentCategory, setCurrentCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // We probably want to switch to server side rendering here to avoid the flash of unfiltered content
  useEffect(() => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    setCurrentCategory(
      blogCategories.find((c) => c === params.get("category")) || ""
    );
  }, []);

  // When the category changes, update the posts & the URL
  useEffect(() => {
    const { pathname } = window.location;

    if (currentCategory !== "") {
      setFilteredPosts(
        posts.filter((post) => post.content.category === currentCategory)
      );

      // Wrapping if required for testing
      if (router) {
        router.push(
          {
            pathname,
            query: { category: currentCategory },
          },
          undefined,
          {
            shallow: true,
          }
        );
      }
    } else {
      setFilteredPosts(posts);

      // Wrapping if required for testing
      if (router) {
        router.push(pathname, undefined, { shallow: true });
      }
    }
  }, [currentCategory]);

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <BlogCategories
          categories={blogCategories}
          posts={posts}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <div className="mt-16 grid gap-20 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
