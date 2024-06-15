import type { FC } from "react";

const HowItWork: FC = () => {
  return (
    <div className="w-full px-safe-md py-16 mt-24 bg-custom-soft-blue">
      <h1 className="h1 text-custom-primary text-center">
        Comment ça marche avec CitizenConnect ?
      </h1>
      <p className="text-custom-primary tracking-wide  text-center text-sm mt-6">
        Plus besoin de vous déplacer pour vos démarches administratives : tout
        se fait en ligne, en quelques clics.
      </p>
      <hr className="w-full bg-gray-500 h-[2px] mt-8 max-w-lg mx-auto" />
      <div className="">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col px-4 py-8  text-left">
            <h3 className=" text-lg font-semibold text-[#0A90D2]">
              Étape 1 : Choisissez le dossier
            </h3>
            <p className="text-custom-primary tracking-wide leading-6 text-sm mt-2">
              Sélectionner le type de dossier dont vous avez besoin parmi les
              options disponibles.
            </p>
          </div>

          <div className="flex flex-col px-4 py-8 text-left">
            <h3 className=" text-lg font-semibold text-[#0A90D2]">
              Étape 2 : Remplissez les informations
            </h3>

            <p className="text-custom-primary tracking-wide leading-6 text-sm mt-2">
              Ensuite, remplissez le formulaire en ligne avec les informations
              requises.
            </p>
          </div>

          <div className="flex flex-col px-4 py-8 text-left">
            <h3 className=" text-lg font-semibold text-[#0A90D2]">
              Étape 3 : Suivre le dossier
            </h3>

            <p className="text-custom-primary tracking-wide leading-6 text-sm mt-2">
              Sélectionner le type de dossier dont vous avez besoin parmi les
              options disponibles.
            </p>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default HowItWork;
