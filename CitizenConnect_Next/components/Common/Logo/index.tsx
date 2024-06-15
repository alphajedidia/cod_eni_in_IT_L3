import { Milk } from "lucide-react";
import type { FC } from "react";
import classNames from "classnames";
import Link from "next/link";

import style from "./index.module.css";

type LogoProps = {
  href?: string;
  name?: string;
  src?: string;
};

const Logo: FC<LogoProps> = ({ href, name, src }) => {
  if (href) {
    return (
      <Link href={href} className={classNames(style.wrapper)}>
        <img src={src}></img>
        {name && <span>{name}</span>}
      </Link>
    );
  }

  return (
    <div className={classNames(style.wrapper)}>
      <Milk className={style.logo} />
      {name && <span>{name}</span>}
    </div>
  );
};

export default Logo;
