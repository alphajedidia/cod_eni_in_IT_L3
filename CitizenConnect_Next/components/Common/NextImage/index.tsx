import type { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

import style from "./index.module.css";

type NextImageProps = {
  size: "sm" | "lg" | "xl" | "card" | "icon";
  src: string;
  alt: string;
  width: number;
  height: number;
  classname?: string;
};

const NextImage: FC<NextImageProps> = ({
  size,
  src,
  alt,
  width,
  height,
  classname,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNames(style[size], classname)}
    />
  );
};

export default NextImage;
