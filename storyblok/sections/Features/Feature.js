import { storyblokEditable } from "@storyblok/react";

const FeaturedContent = ({ blok }) => {
  const editable = storyblokEditable(blok);
  const { title, description } = blok;

  return (
    <div className="flex flex-col max-w-sm">
      <div>
        <h3 {...editable} className="mb-2 text-xl">
          {title}
        </h3>
        <p
          {...editable}
          className="mb-2 text-lg font-light text-gray-500 dark:text-gray-300"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturedContent;
