import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import Image from "../../components/Image";

const ImageSection = ({ blok }) => {
  const editable = storyblokEditable(blok);
  const { image, layout, spacing } = blok;
  const isContained = layout === "contained";
  const hasSpacing = spacing !== "none";

  return (
    <section {...editable} className={hasSpacing && "py-12 md:py-20"}>
      <div className={clsx("overflow-hidden", isContained && "container")}>
        <div
          className={clsx(
            isContained && "overflow-hidden",
            "flex max-w-full items-center justify-center"
          )}
        >
          <Image
            src={image.filename}
            alt={image.alt}
            width={1920}
            className={
              !isContained &&
              "h-96 w-auto max-w-none object-cover sm:h-[32rem] md:h-full"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;