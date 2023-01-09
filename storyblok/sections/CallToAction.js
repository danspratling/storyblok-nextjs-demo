import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import Button from "../../components/Button";
import RichText from "../../components/RichText";

const CallToAction = ({ blok }) => {
  const { title, description, buttons, theme = "default" } = blok;
  const editable = storyblokEditable(blok);

  const themeStyles = {
    default: {
      background: "",
      heading: "text-gray-900 dark:text-gray-50",
      description: "text-gray-700 dark:text-gray-200",
    },
    dark: {
      background: "bg-gray-900 text-gray-50",
      heading: "text-gray-50",
      description: "text-gray-300",
    },
  };

  return (
    <section
      {...editable}
      className={clsx(themeStyles[theme].background, "py-12 md:py-20")}
    >
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            {...editable}
            className={clsx(
              themeStyles[theme].heading,
              "mb-8 text-2xl font-normal leading-none tracking-tight md:text-4xl lg:text-5xl"
            )}
          >
            {title}
          </h2>

          <RichText
            {...editable}
            data={description}
            className={clsx(
              themeStyles[theme].description,
              "max-w-full text-2xl font-light"
            )}
          />

          {buttons.length ? (
            <div className="mt-10 flex flex-wrap justify-center gap-3">
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

export default CallToAction;
