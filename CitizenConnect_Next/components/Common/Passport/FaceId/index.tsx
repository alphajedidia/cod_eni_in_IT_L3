import type { FC } from "react";

import Image from "next/image";
import Button from "../../Button";

type FaceIdProps = {
  setCurrentStep: (step: number) => void;
};

const FaceId: FC<FaceIdProps> = ({ setCurrentStep }) => {
  return (
    <div className="bg-white py-6">
      <p className="mt-4 text-sm text-custom-primary leading-6 px-14 text-left">
        Assurez-vous de montrer l'intégralité de votre visage et de vérifier
        attentivement votre identité pour des raisons de sécurité. La photo que
        vous prendrez sera utilisée sur votre passeport.
      </p>
      <div className="w-full h-[400px] flex flex-col gap-12 justify-center items-center">
        <Image
          src="/assets/FaceId.png"
          alt="face id"
          width={280}
          height={280}
          className="size-[280px] mt-12"
        />
        <Button kind="primary" onClick={() => setCurrentStep(2)}>
          Ouvrir caméra
        </Button>
      </div>
    </div>
  );
};

export default FaceId;
