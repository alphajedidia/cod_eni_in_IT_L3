import Image from "next/image";
import type { FC } from "react";
import Button from "../../Button";

type VerificationProps = {
  setCurrentStep: (step: number) => void;
};

const Verification: FC<VerificationProps> = ({ setCurrentStep }) => {
  return (
    <div className="bg-white py-6">
      <p className="mt-4 text-sm text-custom-primary leading-6 px-14 text-left">
        Assurez-vous de montrer l'intégralité de votre visage et de vérifier
        attentivement votre identité pour des raisons de sécurité. La photo que
        vous prendrez sera utilisée sur votre passeport.
      </p>
      <div className="w-full flex flex-col gap-12 justify-center items-center">
        <Image
          src="/assets/passeport.png"
          alt="passport"
          width={572}
          height={404}
          className="w-[572px] h-[404px] mt-12"
        />
        <Button kind="primary" onClick={() => setCurrentStep(3)}>
          Vérification
        </Button>
      </div>
    </div>
  );
};

export default Verification;
