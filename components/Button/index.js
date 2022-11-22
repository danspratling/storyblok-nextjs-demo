import Link from "next/link";

export const Button = ({ link, style, children }) => {
  if (!link) return null;

  const styles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
  };

  return (
    <Link href={link}>
      <a className={`btn ${styles[style]} btn-xl`}>{children}</a>
    </Link>
  );
};
