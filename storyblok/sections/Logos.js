import { storyblokEditable } from "@storyblok/react";
import Image from "../../components/Image";
import RichText from "../../components/RichText";
import Button from "../../components/Button";

const Logos = ({ blok }) => {
  const editable = storyblokEditable(blok);
  const { title, description, buttons, logos } = blok;

  return (
    <section {...editable} className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-8 text-3xl font-normal leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <RichText
            data={description}
            className="mb-12 text-lg font-light text-gray-700 dark:text-gray-200 md:text-xl lg:text-2xl"
          />

          {buttons?.length && (
            <div className="flex flex-wrap justify-center gap-3">
              {buttons.map((button, index) => (
                <Button key={index} link={button.link} style={button.style}>
                  {button.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto gap-x-20 gap-y-4">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.filename}
              alt={logo.alt}
              className="w-auto py-6 max-h-24"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
