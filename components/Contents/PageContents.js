import clsx from "clsx";
import { render, NODE_HEADING } from "storyblok-rich-text-react-renderer";
import Link from "next/link";
// import { NewsletterForm } from "../NewsletterForm";
import { createId } from "../../utils/createId";
import { generateTableOfContents } from "../../utils/generateTableOfContents";

export const PageContents = ({ content, currentSection }) => {
  return (
    <nav aria-labelledby="on-this-page-title" className="w-56">
      <h2
        id="on-this-page-title"
        className="font-display text-sm font-medium text-slate-900 dark:text-white"
      >
        On this page
      </h2>
      <Contents data={content} currentSection={currentSection} />

      {/* <div className="relative z-10 hidden w-full rounded-lg bg-gray-100 px-10 py-8 dark:bg-black xl:block">
        <h2 className="mb-4 text-2xl">Join our newsletter</h2>
        <p className="mb-4 hidden text-lg font-light 2xl:block">
          No spam. Just the latest releases, tips, and interesting articles, in
          your inbox when they release.
        </p>

        <NewsletterForm
          placeholder="Enter your email"
          submitLabel="Subscribe"
          vertical
        />
      </div> */}
    </nav>
  );
};

const Contents = ({ data, currentSection }) => {
  const { content } = data;
  return (
    <ol role="list" className="mt-4 space-y-3 text-sm">
      {render(
        {
          type: "doc",
          content: generateTableOfContents(content),
        },
        {
          nodeResolvers: nodeResolvers(currentSection),
        }
      )}
    </ol>
  );
};

const nodeResolvers = (currentSection) => {
  return {
    [NODE_HEADING]: (children, { level }) => {
      const id = createId(children);
      const isActive = currentSection === id;
      return (
        <li>
          <Link href={`#${id}`}>
            <a
              className={clsx(
                "block text-gray-500 transition duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                level === 2 && "pl-2",
                level === 3 && "pl-4",
                isActive && "text-gray-900 dark:text-gray-50"
              )}
              data-level={level}
            >
              {children}
            </a>
          </Link>
        </li>
      );
    },
  };
};
