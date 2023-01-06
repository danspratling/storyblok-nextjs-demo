import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import Image from "../../components/Image";
import { calculateStoryblokReadTime } from "../../utils/calculateReadTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faFacebookMessenger,
  faLinkedin,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

export const BlogHero = ({ blok, publishDate, updatedDate }) => {
  const { title, description, featured_image, authors, category, content } =
    blok;
  const readTime = calculateStoryblokReadTime(content);

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-100 p-[0.4rem] dark:bg-gray-800">
            <h1 className="rounded-full bg-gray-800 px-[0.65rem] py-[0.15rem] text-white dark:bg-gray-50 dark:text-gray-900">
              {category}
            </h1>
            <p className="pr-2">{readTime} min read</p>
          </div>

          <h1 className="mb-8 text-4xl font-normal leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-5xl lg:text-7xl">
            {title}
          </h1>

          {description && (
            <p className="mb-12 text-lg font-light text-gray-700 dark:text-gray-200 md:text-xl lg:text-2xl">
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
          <div className="mb-6 flex flex-wrap gap-4 md:mb-0 md:gap-6 lg:gap-12">
            <InfoCard title="Written by">
              {/* <Image
                src={author.data.avatar.filename}
                alt={author.}
                width={28}
                height={28}
                className="rounded-full"
              />
              <RichText
                field={author.name}
                plainText
                as="p"
                className="md:text-lg"
              /> */}
            </InfoCard>

            <InfoCard title="Published on">
              <p className="md:text-lg">
                {/* {publishDate
                  ? format(asDate(publishDate), "d MMMM, yyyy")
                  : "Draft post"} */}
              </p>
            </InfoCard>

            {updatedDate && (
              <InfoCard title="Updated on">
                <p className="md:text-lg">
                  {/* {format(asDate(updatedDate), "d MMMM, yyyy")} */}
                </p>
              </InfoCard>
            )}
          </div>

          <div className="flex flex-wrap items-start gap-4">
            <ShareButton
              icon={faTwitter}
              as={TwitterShareButton}
              color="#1DA1F2"
            />
            <ShareButton
              icon={faFacebook}
              as={FacebookShareButton}
              color="#1877F2"
            />

            <ShareButton
              icon={faFacebookMessenger}
              as={FacebookMessengerShareButton}
              color="#0283fe"
            />

            <ShareButton
              icon={faLinkedin}
              as={LinkedinShareButton}
              color="#0A66C2"
            />

            <ShareButton
              icon={faReddit}
              as={RedditShareButton}
              color="#FF4500"
            />

            <CopyLinkButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;

const InfoCard = ({ title, children }) => (
  <div className="flex w-full flex-wrap items-center gap-4 md:block md:w-auto">
    <p className="text-sm text-gray-600 dark:text-gray-300 md:mb-3">{title}</p>
    <div className="flex gap-2">{children}</div>
  </div>
);

const ShareButton = ({ icon, as, color, ...rest }) => {
  const CustomComponent = as;
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null;

  return (
    <CustomComponent url={window.location.href} className="group" {...rest}>
      <span className="inline-flex rounded-lg bg-gray-100 p-3 transition duration-200 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
        <FontAwesomeIcon
          icon={icon}
          className="h-6 w-6 rounded-full"
          style={{ color }}
        />
      </span>
    </CustomComponent>
  );
};

const CopyLinkButton = () => {
  const [linkCopied, setLinkCopied] = useState(false);

  if (linkCopied) {
    setTimeout(() => setLinkCopied(false), 3000);
    return (
      <button className="inline-flex gap-2 rounded-lg bg-gray-100 p-3 transition duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
        Link Copied
        <CheckIcon className="h-6 w-6" />
      </button>
    );
  }

  return (
    <button
      onClick={() =>
        navigator?.clipboard
          ?.writeText(window?.location?.href)
          .then(() => setLinkCopied(true))
      }
      className="inline-flex gap-2 rounded-lg bg-gray-100 p-3 transition duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      Copy Link
      <DocumentDuplicateIcon className="h-6 w-6" />
    </button>
  );
};
