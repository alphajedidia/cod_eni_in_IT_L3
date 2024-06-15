import type { FC } from "react";
import Link from "next/link";

type BtnCategoryProps = {
  label: string;
  url: string;
};

const BtnCategory: FC<BtnCategoryProps> = ({ label, url }) => {
  return (
    <Link
      href={url}
      className="px-4 py-3 border-custom-blue border-[1.5px] text-custom-blue font-medium tracking-wider text-sm text-center rounded-[4px] underline underline-offset-2 hover:bg-custom-blue hover:text-white transition-all ease-in-out"
    >
      {label}
    </Link>
  );
};

export default BtnCategory;
