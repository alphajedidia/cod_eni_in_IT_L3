import type { FC } from "react";

type CardTitleProps = {
  title: string;
};

const CardTitle: FC<CardTitleProps> = ({ title }) => {
  return <h3 className="text-custom-primary text-lg font-semibold">{title}</h3>;
};

export default CardTitle;
