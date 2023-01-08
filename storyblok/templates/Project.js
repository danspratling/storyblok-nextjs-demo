import { storyblokEditable } from "@storyblok/react";
import StoryblokComponent from "..";
import { sections } from "../sections";

const Project = ({ blok }) => {
  if (!blok?.body?.length) return null;

  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          components={sections}
        />
      ))}
    </main>
  );
};

export default Project;
