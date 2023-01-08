import { useContext } from "react";
import { format } from "date-fns";
import { GlobalContext } from "../../context/GlobalContext";
import { calculateStoryblokReadTime } from "../../utils/calculateReadTime";
import Image from "../../components/Image";
import { storyblokEditable } from "@storyblok/react";
import ShareIcons from "./ShareIcons";

export const BlogHero = ({ blok, publishDate, updatedDate }) => {
  const editable = storyblokEditable(blok);
  const { title, description, featured_image, content } = blok;
  const { teamMembers } = useContext(GlobalContext);
  const readTime = calculateStoryblokReadTime(content);
  const publishedOn = new Date(publishDate).setHours(0, 0, 0, 0);
  const updatedOn = new Date(updatedDate).setHours(0, 0, 0, 0);

  const authors = teamMembers.filter((author) =>
    blok.authors.includes(author.uuid)
  );

  return (
    <section {...editable} className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-5xl">
          <div className="inline-flex items-center mb-6 bg-gray-100 rounded-full gap-2 p-[0.4rem] dark:bg-gray-800">
            {blok.category && (
              <p
                {...editable}
                className="text-white bg-gray-800 rounded-full px-[0.65rem] py-[0.15rem] dark:bg-gray-50 dark:text-gray-900"
              >
                {blok.category}
              </p>
            )}
            <p className="pr-2">{readTime} min read</p>
          </div>

          <h1
            {...editable}
            className="mb-8 text-4xl font-normal leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-5xl lg:text-7xl"
          >
            {title}
          </h1>

          {description && (
            <p
              {...editable}
              className="mb-12 text-lg font-light text-gray-700 dark:text-gray-200 md:text-xl lg:text-2xl"
            >
              {description}
            </p>
          )}
        </div>

        {featured_image?.filename && (
          <Image
            src={featured_image.filename}
            alt={featured_image.alt}
            width={1504}
            height={516}
            className="mb-8"
          />
        )}

        {/* Author, Dates & Social Sharing */}
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap mb-6 gap-4 md:mb-0 md:gap-6 lg:gap-12">
            {authors.length ? (
              <InfoCard {...editable} title="Written by">
                <Image
                  src={authors[0].content.avatar.filename}
                  alt={authors[0].content.avatar.alt}
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <p className="md:text-lg">{authors[0].name}</p>
              </InfoCard>
            ) : null}

            <InfoCard title="Published on">
              <p className="md:text-lg">
                {publishedOn
                  ? format(publishedOn, "d MMMM, yyyy")
                  : "Draft post"}
              </p>
            </InfoCard>

            {updatedOn && updatedOn > publishedOn ? (
              <InfoCard title="Updated on">
                <p className="md:text-lg">
                  {format(updatedOn, "d MMMM, yyyy")}
                </p>
              </InfoCard>
            ) : null}
          </div>

          <ShareIcons />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;

const InfoCard = ({ title, children }) => (
  <div className="flex flex-wrap items-center w-full gap-4 md:block md:w-auto">
    <p className="text-sm text-gray-600 dark:text-gray-300 md:mb-3">{title}</p>
    <div className="flex gap-2">{children}</div>
  </div>
);
