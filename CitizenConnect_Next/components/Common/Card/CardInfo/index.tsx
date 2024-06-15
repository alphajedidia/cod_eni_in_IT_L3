import type { FC } from "react";
import NextImage from "../../NextImage";

type CardInfoProps = {
  times: string;
  price: string;
};

const CardInfo: FC<CardInfoProps> = ({ times, price }) => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-1">
        <NextImage
          src="/assets/clock.png"
          alt="clock"
          width={17.65}
          height={17.65}
          size="icon"
          classname="w-[17.65px] h-[17.65px]"
        />
        <span className="text-sm">{times}</span>
      </div>
      <div className="flex gap-1 pl-2">
        <NextImage
          src="/assets/money.png"
          alt="money"
          width={41}
          height={21}
          size="icon"
          classname="w-[41px] h-[21px]"
        />
        <span className="text-sm -translate-x-2">{price}</span>
      </div>
    </div>
  );
};

export default CardInfo;
