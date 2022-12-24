import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { Button } from "../../components/Button";

const Hero = ({ blok }) => {
  const { title, description, buttons, alignment } = blok;
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
          <h1
            {...editable}
            className="mb-8 text-5xl font-normal leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-6xl lg:text-7xl"
          >
            {title}
          </h1>

          <p
            {...editable}
            className="text-lg font-light text-gray-700 dark:text-gray-200 md:text-xl lg:text-2xl"
          >
            {description}
          </p>

          {buttons.length ? (
            <div
              className={clsx(
                "mt-12 flex flex-wrap gap-3",
                isCenterAligned && "justify-center"
              )}
            >
              {buttons.map((button, index) => (
                <Button key={index} link={button.link} style={button.style}>
                  {button.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
