import { motion } from "framer-motion";

type TabProps = {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
};

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-lg px-6 py-2.5 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-[8px] bg-custom-blue"
        ></motion.span>
      )}
    </button>
  );
};

export default Tab;
