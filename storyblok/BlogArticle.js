import RichText from "../components/RichText";
import { PageContents } from "../components/Contents";
import { storyblokEditable } from "@storyblok/react";
import { useTableOfContents } from "../hooks/useTableOfContents";

const BlogArticle = ({ blok }) => {
  const editable = storyblokEditable(blok);
  const { content } = blok;

  const currentSection = useTableOfContents(blok);

  return (
    <div className="container relative flex justify-center">
      <aside className="hidden lg:relative lg:block lg:flex-none">
        <div className="sticky top-0 py-16 overflow-x-hidden overflow-y-auto -ml-0.5 h-[calc(100vh-4.5rem)] pl-0.5">
          <div className="w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
            {/* <SeriesContents /> */}
          </div>
        </div>
      </aside>
      <article
        {...editable}
        className="flex-auto max-w-2xl min-w-0 px-4 py-16 lg:max-w-4xl lg:pr-0 lg:pl-8 xl:px-16"
      >
        <RichText className="prose-lg" data={content} />
      </article>
      <aside className="hidden xl:sticky xl:top-0 xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <PageContents content={content} currentSection={currentSection} />
      </aside>
    </div>
  );
};

export default BlogArticle;
