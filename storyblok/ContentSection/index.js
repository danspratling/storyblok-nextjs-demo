import clsx from "clsx";
import { storyblokEditable } from "@storyblok/react";
import Image from "../../components/Image";
import { RichText } from "../../components/RichText";

const imageSizes = {
  lg: 994,
  md: 768,
  sm: 576,
};

const imageBasis = {
  lg: "basis-8/12",
  md: "basis-6/12",
  sm: "basis-5/12",
};

const ContentSection = ({ blok }) => {
  const editable = storyblokEditable(blok);
  const { text, image, alignment, direction, size } = blok;
  const isReversed = direction === "reversed";
  const isCentered = alignment === "center";

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="flex items-center gap-12 lg:gap-24">
          <div
            className={clsx(
              "max-w-4xl flex-shrink flex-grow",
              isReversed && "lg:order-last",
              isCentered && !isReversed && "mx-auto text-center"
            )}
          >
            <RichText
              {...editable}
              data={text}
              className="prose-lg font-light text-gray-700 dark:text-gray-200"
            />
          </div>

          {image?.filename && (
            <div className={clsx("flex-shrink-0", imageBasis[size])}>
              <Image
                src={image.filename}
                alt={image.alt}
                width={imageSizes[size]}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
