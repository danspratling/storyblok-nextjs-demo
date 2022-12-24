// import { useContext } from "react";
// import { GlobalContext } from "../../../../context/GlobalContext";
// import BlogCard from "../../../../components/BlogCard";
import { storyblokEditable } from "@storyblok/react";

const BlogSection = ({ blok }) => {
  const { title, description } = blok;
  const editable = storyblokEditable(blok);
  // const { recentPosts } = useContext(GlobalContext);

  return (
    <section {...editable} className="py-12 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            {...editable}
            className="mb-8 text-2xl font-normal leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl lg:text-5xl"
          >
            {title}
          </h2>

          <p
            {...editable}
            className="mb-20 text-lg font-light text-gray-700 dark:text-gray-200 md:text-xl lg:text-2xl"
          >
            {description}
          </p>
        </div>

        {/* <div className="grid gap-8 md:grid-cols-3">
          {recentPosts.map((result, index) => (
            <BlogCard key={index} post={result} vertical />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;
