import Image from "../../Image";

const NodeImage = (_, props) => {
  return <Image src={props.src} alt={props.alt} {...props} />;
};

export default NodeImage;
