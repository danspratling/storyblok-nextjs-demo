import Image from "../../Image";

const NodeImage = (props) => {
  return <Image src={props.src} alt={props.alt} {...props} />;
};

export default NodeImage;
