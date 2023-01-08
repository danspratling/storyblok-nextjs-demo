/* Docs: https://www.npmjs.com/package/storyblok-rich-text-react-renderer */
import { useEffect } from "react";
import {
  render,
  MARK_LINK,
  NODE_HEADING,
  NODE_IMAGE,
} from "storyblok-rich-text-react-renderer";
import Prism from "prismjs";
import Link from "next/link";
import Image from "../Image";
import { createId } from "../../utils/createId";

export default function RichText({ data, ...props }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

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

// Resolves components from inline elements to react components
const markResolvers = {
  [MARK_LINK]: (children, props) => {
    const { linktype, href, target } = props;

    // Email links: add `mailto:` scheme and map to <a>
    if (linktype === "email") return <a href={`mailto:${href}`}>{children}</a>;

    // External links: map to <a>
    if (href.match(/^(https?:)?\/\//)) {
      return (
        <a href={href} target={target ?? "_blank"}>
          {children}
        </a>
      );
    }

    // Internal links: map to <Link>
    return (
      <Link href={href} target={target}>
        {children}
      </Link>
    );
  },
};

const nodeResolvers = {
  [NODE_HEADING]: (children, { level }) => {
    const Heading = `h${level}`;
    return <Heading id={createId(children)}>{children}</Heading>;
  },
  [NODE_IMAGE]: (_, props) => (
    <Image src={props.src} alt={props.alt} {...props} />
  ),
};
