const StoryblokComponent = ({ blok, components, ...props }) => {
  if (typeof components[blok.component] === "undefined") return null;

  const Component = components[blok.component];
  return <Component blok={blok} {...props} />;
};

export default StoryblokComponent;
