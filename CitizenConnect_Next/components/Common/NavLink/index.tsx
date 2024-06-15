import type { FC } from "react";
import Link from "next/link";

import styles from "./index.module.css";
import classNames from "classnames";

type NavLinkProps = {
  kind?: "default" | "active";
  label: string;
  href: string;
  className?: string | undefined;
};

const NavLink: FC<NavLinkProps> = ({
  kind = "default",
  label,
  href,
  className,
  ...props
}) => {
  const classname = classNames(styles.navlink, styles[kind], className);

  if (!href || href.toString().startsWith("http")) {
    return (
      <a href={href} {...props} className={classname}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href?.toString()} {...props} className={classname}>
      {label}
    </Link>
  );
};

export default NavLink;
