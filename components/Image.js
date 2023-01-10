import NextImage from "next/image";
import imageLoader from "../utils/imageLoaders/storyblok";

const Image = (props) => {
  const layout = props.layout || (!props.width && !props.height) ? "fill" : "";
  return <NextImage {...props} layout={layout} loader={imageLoader} />;
};

export default Image;
