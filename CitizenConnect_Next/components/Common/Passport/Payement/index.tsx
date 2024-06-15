import type { FC } from "react";

const Payement: FC = () => {
  return (
    <div className="bg-white py-6 mt-6">
      <h4 className="text-custom-blue text-lg font-semibold pl-4">
        Détail du payement
      </h4>
      <div className="rounded-lg border border-gray-100 ml-4 mt-6 py-3 px-6 w-fit shadow-sm flex flex-col gap-2">
        <div className="flex justify-between gap-24  even:bg-gray-50 p-3 text-custom-primary">
          <dt className="font-medium">Consultation CIN</dt>
          <dd className="text-gray-700 sm:col-span-2">0 Ariary</dd>
        </div>

        <div className="flex justify-between gap-24  even:bg-gray-50 p-3">
          <dt className="font-medium">Acte de naissance</dt>
          <dd className="text-gray-700 sm:col-span-2">2 000 Ariary</dd>
        </div>

        <div className="flex justify-between gap-24  even:bg-gray-50 p-3">
          <dt className="font-medium">C. Residence</dt>
          <dd className="text-gray-700 sm:col-span-2">2 000 Ariary</dd>
        </div>
        <div className="flex justify-between gap-24  even:bg-gray-50 p-3">
          <dt className="font-medium">C. Position Militaire</dt>
          <dd className="text-gray-700 sm:col-span-2">3 000 Ariary</dd>
        </div>

        <div className="flex justify-between gap-24  even:bg-gray-50 p-3">
          <dt className="font-medium">Passeport</dt>
          <dd className="text-gray-700 sm:col-span-2">190 000 Ariary</dd>
        </div>

        <hr />

        <div className="flex justify-between gap-24  even:bg-gray-50 p-3">
          <dt className="font-medium">Total</dt>
          <dd className="text-gray-700 sm:col-span-2">197 000 ar</dd>
        </div>
      </div>
    </div>
  );
};

export default Payement;
