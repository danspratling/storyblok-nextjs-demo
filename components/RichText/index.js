/* Docs: https://www.npmjs.com/package/storyblok-rich-text-react-renderer */
import {
  render,
  MARK_LINK,
  NODE_HEADING,
  NODE_IMAGE,
  NODE_CODEBLOCK,
} from "storyblok-rich-text-react-renderer";
import dynamic from "next/dynamic";

const NodeHeading = dynamic(() => import("./resolvers/heading"));
const NodeImage = dynamic(() => import("./resolvers/image"));
const NodeCodeblock = dynamic(() => import("./resolvers/codeBlock"));
const MarkLink = dynamic(() => import("./resolvers/link"));

// import NodeHeading from "./resolvers/heading";
// import NodeImage from "./resolvers/image";
// import NodeCodeblock from "./resolvers/codeBlock";
// import MarkLink from "./resolvers/link";

// Resolves components from inline elements to react components
const markResolvers = {
  [MARK_LINK]: (children, props) => <MarkLink {...props}>{children}</MarkLink>,
};

const nodeResolvers = {
  [NODE_HEADING]: (children, props) => (
    <NodeHeading {...props}>{children}</NodeHeading>
  ),
  [NODE_IMAGE]: (_, props) => <NodeImage {...props} />,
  [NODE_CODEBLOCK]: (children, props) => (
    <NodeCodeblock {...props}>{children}</NodeCodeblock>
  ),
};

export default function RichText({ data, ...props }) {
  if (!data.content.length) return null;

  return (
    <div {...props}>
      {render(data, {
        markResolvers,
        nodeResolvers,
      })}
    </div>
  );
}
