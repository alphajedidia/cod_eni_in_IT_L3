import type { FC } from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardInfo from "./CardInfo";
import Link from "next/link";

type CardProps = {
  title: string;
  times: string;
  price: string;
  src: string;
  href: string;
};

const Card: FC<CardProps> = ({ title, times, price, src, href }) => {
  return (
    <Link
      href={href}
      className="flex flex-col w-fit shadow-md shadow-slate-200 rounded-2xl hover:shadow-2xl hover:shadow-slate-300"
    >
      <CardImage src={src} />
      <div className="flex flex-col gap-3 p-6">
        <CardTitle title={title} />
        <CardInfo times={times} price={price} />
      </div>
    </Link>
  );
};

export default Card;
