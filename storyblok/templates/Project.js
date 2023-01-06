import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Project = ({ blok }) => {
  if (!blok?.body?.length) return null;

  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Project;
