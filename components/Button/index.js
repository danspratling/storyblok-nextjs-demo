import Link from "next/link";

const styles = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
};

export const Button = ({ link, style, children }) => {
  const url = link?.story?.url || link?.url;
  if (!url) return null;

  return (
    <Link href={`/${url}`} className={`btn ${styles[style]} btn-xl`}>
      {children}
    </Link>
  );
};
