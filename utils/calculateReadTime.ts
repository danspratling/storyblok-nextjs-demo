export const calculateReadTime = (content: string | string[]) => {
  if (!content || content.length === 0) return 0;

  const wpm = 300;

  let contentString = typeof content === "string" ? content : content.join(" ");

  const words = contentString.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
};

export const calculateStoryblokReadTime = (richText: any) => {
  const contentString = richText.content
    .flatMap((item) => item.content)
    .map((text) => text?.text ?? "");

  return calculateReadTime(contentString);
};
