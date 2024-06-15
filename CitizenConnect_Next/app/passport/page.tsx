import Footer from "@/components/Containers/Footer/Footer";
import HowItWork from "@/components/Containers/HowItWork";
import Navbar from "@/components/Containers/NavBar";
import PassportPage from "@/components/Containers/Pages/PassportPage";
import type { FC } from "react";

const Passport: FC = () => {
  return (
    <div className="w-full">
      <Navbar isLoggedIn={true} />
      <PassportPage />
      <HowItWork />
    </div>
  );
};

export default Passport;
