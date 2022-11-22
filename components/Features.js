import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { Button } from "../components/Button";

const Features = ({ blok }) => {
  const { title, description, features, buttons, layout } = blok;
  const editable = storyblokEditable(blok);
  const isLayoutVertical = layout === "vertical";

  return (
    <section {...editable} className="bg-primary py-12 md:py-20">
      <div className="container flex justify-center">
        <div className="flex w-full flex-col items-center justify-between gap-8 text-center lg:gap-12">
          <div className="flex flex-col items-center lg:max-w-4xl">
            <h2 className="mb-5 text-3xl leading-10 lg:text-4xl">{title}</h2>

            <p className="mb-8 text-xl font-light leading-8 text-gray-500 dark:text-gray-300 lg:text-2xl">
              {description}
            </p>
          </div>

          <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-16">
            {features.map((feature, index) => (
              <FeaturedContent key={index} feature={feature} />
            ))}
          </div>

          {buttons.length && (
            <div className="flex flex-wrap justify-center gap-3">
              {buttons.map((button, index) => (
                <Button key={index} link={button.link} style={button.style}>
                  {button.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;

const FeaturedContent = ({ feature }) => {
  const editable = storyblokEditable(feature);

  return (
    <div {...editable} className="flex max-w-sm flex-col">
      <div>
        <h3 className="mb-2 text-xl">{feature.title}</h3>
        <p className="mb-2 text-lg font-light text-gray-500 dark:text-gray-300">
          {feature.description}
        </p>
      </div>
    </div>
  );
};
