import { createId } from "../../../utils/createId";

const NodeHeading = ({ level, children }) => {
  const Heading = `h${level}`;
  return <Heading id={createId(children)}>{children}</Heading>;
};

export default NodeHeading;
