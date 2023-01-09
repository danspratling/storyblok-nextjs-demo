import Link from "next/link";

const MarkLink = (children, props) => {
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
};

export default MarkLink;
