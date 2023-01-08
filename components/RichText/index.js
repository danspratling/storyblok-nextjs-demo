/* Docs: https://www.npmjs.com/package/storyblok-rich-text-react-renderer */
import { useEffect } from "react";
import {
  render,
  MARK_LINK,
  NODE_HEADING,
  NODE_IMAGE,
  NODE_CODEBLOCK,
} from "storyblok-rich-text-react-renderer";
// import dynamic from "next/dynamic";
import { createId } from "../../utils/createId";
import Prism from "prismjs";
import Link from "next/link";
import Image from "../Image";

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
        <a>{children}</a>
      </Link>
    );
  },
};

const nodeResolvers = {
  [NODE_HEADING]: (children, { level }) => {
    // const { createId } = dynamic(() => import("../../utils/createId"), {
    //   ssr: false,
    // });
    const Heading = `h${level}`;
    return <Heading id={createId(children)}>{children}</Heading>;
  },
  [NODE_IMAGE]: (_, props) => {
    return <Image src={props.src} alt={props.alt} {...props} />;
  },
  [NODE_CODEBLOCK]: (children, props) => {
    // const Prism = dynamic(() => import("prismjs"));

    useEffect(() => {
      Prism.highlightAll();
    }, [Prism]);

    return (
      <pre className={props.class}>
        <code className={props.class}>{children}</code>
      </pre>
    );
  },
};
