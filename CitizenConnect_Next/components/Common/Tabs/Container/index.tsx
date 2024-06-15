import { TABS } from "@/constants/tabs";
import Tab from "../../BtnTab";

const TabsContainer = ({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: (index: number) => void;
}) => {
  return (
    <div className="mb-8 flex flex-wrap items-start gap-2 relative">
      {TABS.map((tab, index) => (
        <Tab
          text={tab}
          selected={selected === index}
          setSelected={() => setSelected(index)}
          key={tab}
        />
      ))}
    </div>
  );
};

export default TabsContainer;
