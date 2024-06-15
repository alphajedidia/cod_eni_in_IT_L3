"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Les plus demandés", "Docs", "Components", "Effects"];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-red-500"
        ></motion.span>
      )}
    </button>
  );
};

const ButtonShapeTabs = () => {
  const [selected, setSelected] = useState<string>(tabs[0]);

  const renderContent = (selected: string) => {
    switch (selected) {
      case "Home":
        return <div className="w-full h-full bg-yellow-200">Home Content</div>;
      case "Docs":
        return <div className="w-full h-full bg-yellow-200">Docs Content</div>;
      case "Components":
        return (
          <div className="w-full h-full bg-yellow-200">Components Content</div>
        );
      case "Effects":
        return (
          <div className="w-full h-full bg-yellow-200">Effects Content</div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-8 flex flex-wrap items-start gap-2 bg-green-300 h-[400px] relative">
      {tabs.map((tab, index) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}

      <div className="mt-4 w-full h-full relative">
        {renderContent(selected)}
      </div>
    </div>
  );
};

export default ButtonShapeTabs;
