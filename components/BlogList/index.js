import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../context/GlobalContext";
import BlogCard from "../../components/BlogCard";
import BlogCategories from "./BlogCategories";

const BlogList = () => {
  const router = useRouter();
  const { blogPosts, blogCategories } = useContext(GlobalContext);

  const [currentCategory, setCurrentCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // We probably want to switch to server side rendering here to avoid the flash of unfiltered content
  useEffect(() => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    setCurrentCategory(
      blogCategories.find((c) => c.value === params.get("category")) || ""
    );
  }, []);

  // When the category changes, update the posts & the URL
  useEffect(() => {
    const { pathname } = window.location;

    if (currentCategory !== "") {
      setFilteredPosts(
        blogPosts.filter(
          (post) => post.content.category === currentCategory.value
        )
      );

      // Wrapping if required for testing
      if (router) {
        router.push(
          {
            pathname,
            query: { category: currentCategory.value },
          },
          undefined,
          {
            shallow: true,
          }
        );
      }
    } else {
      setFilteredPosts(blogPosts);

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
          posts={blogPosts}
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
