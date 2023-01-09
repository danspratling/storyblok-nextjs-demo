/* Docs: https://www.npmjs.com/package/storyblok-rich-text-react-renderer */
import {
  render,
  MARK_LINK,
  NODE_HEADING,
  NODE_IMAGE,
  NODE_CODEBLOCK,
} from "storyblok-rich-text-react-renderer";

import NodeHeading from "./resolvers/heading";
import NodeImage from "./resolvers/image";
import NodeCodeblock from "./resolvers/codeBlock";
import MarkLink from "./resolvers/link";

// Resolves components from inline elements to react components
const markResolvers = {
  [MARK_LINK]: MarkLink,
};

const nodeResolvers = {
  [NODE_HEADING]: NodeHeading,
  [NODE_IMAGE]: NodeImage,
  [NODE_CODEBLOCK]: NodeCodeblock,
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
