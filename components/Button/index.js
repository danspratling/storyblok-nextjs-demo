import Link from "next/link";

const styles = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
};

export const Button = ({ link, style, children }) => {
  if (!link?.story?.url && !link?.url) return null;

  return (
    <Link href={link.url} className={`btn ${styles[style]} btn-xl`}>
      {children}
    </Link>
  );
};
