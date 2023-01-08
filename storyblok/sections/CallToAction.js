import { storyblokEditable } from "@storyblok/react";
import { Button } from "../../components/Button";
import RichText from "../../components/RichText";

const CallToAction = ({ blok }) => {
  const { title, description, buttons } = blok;
  const editable = storyblokEditable(blok);

  return (
    <section {...editable} className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            {...editable}
            className="mb-8 text-2xl font-normal leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl lg:text-5xl"
          >
            {title}
          </h2>

          <RichText
            {...editable}
            data={description}
            className="max-w-full text-2xl text-gray-700 prose dark:text-gray-200"
          />

          {buttons.length ? (
            <div className="flex flex-wrap justify-center mt-10 gap-3">
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
