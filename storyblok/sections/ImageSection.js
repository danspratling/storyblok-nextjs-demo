import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import Image from "next/image";

const ImageSection = ({ blok }) => {
  const editable = storyblokEditable(blok);
  const { image, layout, spacing } = blok;
  const isContained = layout === "contained";
  const hasSpacing = spacing !== "none";

  return (
    <section {...editable} className={clsx(hasSpacing && "py-12 md:py-20")}>
      <div className={clsx("overflow-hidden", isContained && "container")}>
        <div
          className={clsx(
            "relative flex max-w-full items-center justify-center",
            isContained && "overflow-hidden"
          )}
        >
          <div
            className={clsx(
              !isContained &&
                "w-full max-w-none object-cover sm:h-[32rem] md:h-[20rem] lg:h-[28rem] xl:h-[32rem]"
            )}
          >
            <Image
              src={image.filename}
              alt={image.alt}
              layout="fill"
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
