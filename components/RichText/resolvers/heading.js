import { createId } from "../../../utils/createId";

const NodeHeading = (children, { level }) => {
  const Heading = `h${level}`;
  return <Heading id={createId(children)}>{children}</Heading>;
};

export default NodeHeading;
