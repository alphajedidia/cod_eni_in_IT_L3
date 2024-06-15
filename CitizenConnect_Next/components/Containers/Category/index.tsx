import type { FC } from "react";

import BtnCategory from "@/components/Common/BtnCategory";
import { CATEGORIES } from "@/constants/categories";

const Category: FC = () => {
  return (
    <div className="w-full h-full mt-24 px-safe-md">
      <h2 className="h2">Parcourir par catégorie</h2>
      <p className="text-custom-tertiary text-sm mt-4">
        Trouver les services publics que vous souhaitez parmi les catégories
        ci-dessous.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {CATEGORIES.map((category, index) => (
          <BtnCategory key={index} label={category.label} url={category.url} />
        ))}
      </div>
    </div>
  );
};

export default Category;
