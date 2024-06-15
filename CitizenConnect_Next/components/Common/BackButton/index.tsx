import classNames from "classnames";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type BackButtonProps = {
  href: string;
  label?: string;
  direction?: "left" | "right";
  classname?: string;
};

const BackButton: FC<BackButtonProps> = ({
  label,
  href,
  direction,
  classname,
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        "absolute flex gap-3 px-4 items-center py-1 text-custom-secondary hover:cursor-pointer hover:text-custom-blue tracking-wide text-sm font-semibold",
        classname
      )}
    >
      <Image
        src="/assets/arrowBack.png"
        width={30}
        height={30}
        className="size-[30px]"
        alt="flêche vers la droite"
      />
      {label}
    </Link>
  );
};

export default BackButton;
