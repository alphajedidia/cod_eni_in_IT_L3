import Button from "@/components/Common/Button";
import SearchBar from "@/components/Common/SearchBar";
import Link from "next/link";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="flex flex-col items-center max-w-4xl space-y-8">
        <h1 className="h1 text-center leading-[3rem]">
          Accédez à tous vos services publics en ligne,
          <span className="text-custom-blue"> rapidement </span> et
          <span className="text-custom-blue"> en toute sécurité.</span>
        </h1>
        <div className="flex gap-4">
          <SearchBar />
          <Button kind="search">Recherche</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
