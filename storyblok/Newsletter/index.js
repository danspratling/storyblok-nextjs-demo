import { storyblokEditable } from "@storyblok/react";
import { NewsletterForm } from "../../components/NewsletterForm";

const Newsletter = ({ blok }) => {
  const editable = storyblokEditable(blok);
  const { title, description, placeholder, submitLabel } = blok;

  return (
    <section {...editable} className="py-12 md:py-20">
      <div className="container">
        <div className="mx-auto grid max-w-6xl items-center text-center">
          <h2
            {...editable}
            className="mb-8 text-3xl font-normal leading-none tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl lg:text-5xl"
          >
            {title}
          </h2>

          <p
            {...editable}
            className="mb-12 text-lg font-light text-gray-700 dark:text-gray-200 md:text-xl lg:text-2xl"
          >
            {description}
          </p>

          <NewsletterForm placeholder={placeholder} submitLabel={submitLabel} />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
