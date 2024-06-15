import type { FC } from "react";

import Navbar from "@/components/Containers/NavBar";
import Hero from "@/components/Containers/Hero";
import ServiceTab from "@/components/Containers/ServiceTab";
import Category from "@/components/Containers/Category";
import HowItWork from "@/components/Containers/HowItWork";
import Footer from "@/components/Containers/Footer/Footer";

export const Home: FC = () => {
  return (
    <div className="w-full overflow-hidden min-h-screen">
      <Navbar isLoggedIn={false} />
      <Hero />
      <ServiceTab />
      <Category />
      <HowItWork />
      <Footer />
    </div>
  );
};

export default Home;
