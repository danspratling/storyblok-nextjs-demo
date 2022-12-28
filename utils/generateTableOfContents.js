import { createId } from "./createId";

export const generateTableOfContents = (data) =>
  data
    .map((item) => {
      if (item.type === "heading") {
        return {
          ...item,
          id: createId(item.content.map((node) => node.text)),
        };
      }

      return null;
    })
    .filter(Boolean);
