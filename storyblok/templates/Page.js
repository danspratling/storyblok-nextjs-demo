import { storyblokEditable } from "@storyblok/react";
import { sections } from "../sections";
import StoryblokComponent from "..";

const Page = ({ blok }) => {
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

export default Page;
