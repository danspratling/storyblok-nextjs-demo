import { storyblokEditable } from "@storyblok/react";
import Button from "../../../components/Button";
import Feature from "./Feature";

const Features = ({ blok }) => {
  const { title, description, features, buttons } = blok;
  const editable = storyblokEditable(blok);

  return (
    <section {...editable} className="py-12 bg-primary md:py-20">
      <div className="container flex justify-center">
        <div className="flex flex-col items-center justify-between w-full text-center gap-8 lg:gap-12">
          <div className="flex flex-col lg:max-w-4xl">
            <h2 {...editable} className="mb-5 text-3xl leading-10 lg:text-4xl">
              {title}
            </h2>

            <p
              {...editable}
              className="mb-8 text-xl font-light text-gray-500 leading-8 dark:text-gray-300 lg:text-2xl"
            >
              {description}
            </p>
          </div>

          <div className="w-full grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
            {features.map((feature, index) => (
              <Feature key={index} blok={feature} />
            ))}
          </div>

          {buttons.length ? (
            <div className="flex flex-wrap justify-center gap-3">
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

export default Features;
