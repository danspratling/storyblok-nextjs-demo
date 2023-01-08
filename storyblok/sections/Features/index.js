import dynamic from "next/dynamic";

const componentMap = {
  vertical: dynamic(() => import("./FeaturesVertical")),
  horizontal: dynamic(() => import("./FeaturesHorizontal")),
};

const Features = ({ blok }) => {
  const VariableComponent = componentMap[blok.layout];
  return <VariableComponent blok={blok} />;
};

export default Features;
