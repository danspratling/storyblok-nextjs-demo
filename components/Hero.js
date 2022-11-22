import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { Button } from "../components/Button";

const Hero = ({ blok }) => {
  const {
    title,
    description,
    primary_link,
    primary_link_label,
    secondary_link,
    secondary_link_label,
    alignment,
  } = blok;
  const editable = storyblokEditable(blok);
  const isCenterAligned = alignment === "center";

  return (
    <section {...editable} className="py-12 md:py-20">
      <div className="container">
        <div
          className={clsx(
            "max-w-5xl",
            isCenterAligned && "mx-auto text-center"
          )}
        >
          <h1 className="mb-8 text-5xl font-normal leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="text-lg font-light text-gray-700 dark:text-gray-200 md:text-xl lg:text-2xl">
            {description}
          </p>

          <div
            className={clsx(
              "mt-12 flex flex-wrap gap-3",
              isCenterAligned && "justify-center"
            )}
          >
            <Button link={primary_link} style="primary">
              {primary_link_label}
            </Button>
            <Button link={secondary_link} style="secondary">
              {secondary_link_label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
