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
        <div className="mx-auto max-w-5xl text-center">
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

        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-20">
          {logos.map((logo, index) => (
            <div key={index} className="relative h-12 w-32">
              <Image
                src={logo.filename}
                alt={logo.alt}
                className="max-h-24 w-auto object-contain py-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
