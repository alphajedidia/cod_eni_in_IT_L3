import type { FC } from "react";

import NextImage from "../../NextImage";

type CardImageProps = {
  src: string;
};

const CardImage: FC<CardImageProps> = ({ src }) => {
  return (
    <div
      className="flex justify-center items-center w-[256px] h-[150px]  rounded-t-2xl"
      style={{
        borderRadius: "20px 20px 0px 0px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        background: "linear-gradient(253deg, #3299CC 10.82%, #37C0C0 88.22%)",
      }}
    >
      <NextImage
        src={src}
        alt="card image"
        width={250}
        height={250}
        size="card"
        classname="w-[82px] h-[101px]"
      />
    </div>
  );
};

export default CardImage;
