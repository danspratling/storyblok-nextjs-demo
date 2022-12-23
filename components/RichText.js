/* Docs: https://www.storyblok.com/docs/richtext-field */

import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.storyblokApiToken,
});

function createMarkup(storyblokHTML) {
  return {
    __html: Storyblok.richTextResolver.render(storyblokHTML),
  };
}

export const RichText = ({ data, ...props }) => {
  return <div dangerouslySetInnerHTML={createMarkup(data)} {...props} />;
};
