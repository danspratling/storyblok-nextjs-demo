export const createId = (children) => {
  const text = typeof children !== "string" ? children.join(" ") : children;

  return text
    .toLowerCase()
    .replace(/[^\w\s]/gi, "") //remove special chars
    .replace(/\s+/g, "-"); //replace spaces with hyphens
};
