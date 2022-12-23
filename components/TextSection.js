import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { RichText } from "./RichText";

const TextSection = ({ blok }) => {
  const editable = storyblokEditable(blok);
  const { text, image, alignment, direction } = blok;
  const isCenterAligned = alignment === "center";
  const isReversed = direction === "reverse";

  return (
    <section {...editable} className="py-12 md:py-20">
      <div className="container">
        <div
          className={clsx(
            image.filename
              ? [
                  "grid items-center gap-12 lg:grid-cols-3 lg:gap-24",
                  isReversed && "lg:grid-cols-reverse",
                ]
              : ["max-w-5xl", isCenterAligned && "mx-auto text-center"]
          )}
        >
          <RichText
            data={text}
            className="prose-lg text-gray-700 dark:text-gray-200"
          />

          {image && (
            <img
              src={image.filename}
              alt={image.alt}
              className="lg:col-span-2"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TextSection;
