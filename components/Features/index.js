import dynamic from "next/dynamic";

import FeaturesVertical from "./FeaturesVertical";
import FeaturesHorizontal from "./FeaturesHorizontal";

const componentMap = {
  vertical: FeaturesVertical,
  horizontal: FeaturesHorizontal,
};

const Features = ({ blok }) => {
  const { layout } = blok;
  const VariableComponent = componentMap[layout];
  return <VariableComponent blok={blok} />;
};

export default Features;
