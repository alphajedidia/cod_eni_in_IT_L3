import type { FC } from "react";

import { CardData } from "@/data/card";
import Card from "@/components/Common/Card";

const CardList: FC = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {CardData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          times={item.times}
          price={item.price}
          src={item.src}
          href={item.href}
        />
      ))}
    </div>
  );
};

export default CardList;
