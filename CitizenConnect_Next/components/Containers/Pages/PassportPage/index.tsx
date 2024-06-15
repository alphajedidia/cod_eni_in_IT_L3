"use client";

import { useState, type FC } from "react";

import BackButton from "@/components/Common/BackButton";
import StepsList from "../../Steps";
import FaceId from "@/components/Common/Passport/FaceId";
import Verification from "@/components/Common/Passport/Verification";
import Payement from "@/components/Common/Passport/Payement";

const Step4Component: FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-md mt-6">
    <h2 className="text-2xl font-semibold text-custom-blue">
      Etape 4: Payment
    </h2>
    <p className="mt-4 text-sm text-custom-primary leading-6">
      This is the content for step 4. Describe the payment process and options
      available.
    </p>
  </div>
);

const PassportPage: FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <FaceId setCurrentStep={setCurrentStep} />;
      case 2:
        return <Verification setCurrentStep={setCurrentStep} />;
      case 3:
        return <Payement />;
      case 4:
        return <Step4Component />;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex items-center justify-center mt-12 px-safe-md">
      <div className="relative w-full h-fit  items-center  space-y-8">
        <h1 className="h1 text-custom-blue text-center leading-[3rem]">
          Demande de passeport
        </h1>
        <div className="relative flex w-full h-full gap-8">
          <div className="w-[30%] h-full">
            <BackButton
              href="/"
              label="Revenir à la liste"
              classname="block mb-6"
            />
            <div className="rounded-xl bg-white shadow-md mt-12 px-4 py-8 space-y-8 border border-gray-100 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <div className="">
                <h4 className="text-custom-blue text-lg font-semibold pl-4">
                  Éligibilité et Prérequis
                </h4>
                <ul className="list-disc list-inside pt-4 w-fit text-sm text-custom-primary leading-6">
                  <li className="pl-8"> Être citoyen du pays</li>
                  <li className="pl-8">Avoir une pièce d'identité valide</li>
                  <li className="pl-8">
                    Remplir toutes les informations nécessaires dans le
                    formulaire
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-custom-blue text-lg font-semibold pl-4">
                  Documents nécessaires
                </h4>
                <ul className="list-disc list-inside pt-4 w-fit text-sm text-custom-primary leading-6">
                  <li className="pl-8"> CIN</li>
                  <li className="pl-8">Acte de naissance</li>
                  <li className="pl-8">Certificat de residence</li>
                  <li className="pl-8">Certificat de position Militaire</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[68%] h-full">
            <StepsList currentStep={currentStep} />
            {renderStepContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassportPage;
