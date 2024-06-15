"use client";

import { type FC, useState } from "react";

import TabsContainer from "@/components/Common/Tabs/Container";
import Content from "@/components/Common/Tabs/Content";

const ServiceTab: FC = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="flex flex-col gap-6 w-full h-fit px-safe-md mt-20">
      <TabsContainer selected={selected} setSelected={setSelected} />
      <Content selected={selected} />
    </div>
  );
};

export default ServiceTab;
