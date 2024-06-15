import Link from "next/link";
import Card from "../../Card";
import CardList from "@/components/Containers/CardList";

const Content = ({ selected }: { selected: number }) => {
  const renderContent = (selected: number) => {
    switch (selected) {
      case 0:
        return (
          <div className="w-full h-full">
            <div className="flex justify-between">
              <h2 className="h2">Les plus demandés</h2>
              <Link href="#" className="text-custom-blue text-sm underline">
                voir tous
              </Link>
            </div>
            <p className="text-custom-tertiary text-sm mt-4">
              Listes des services publique les plus demandés
            </p>
           <CardList/>
          </div>
        );
      case 1:
        return (
          <div className="w-full h-full bg-yellow-200">Content for tab 2</div>
        );
      case 2:
        return (
          <div className="w-full h-full bg-yellow-200">Content for tab 3</div>
        );
      case 3:
        return (
          <div className="w-full h-full bg-yellow-200">Content for tab 4</div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-4 w-full h-full relative">{renderContent(selected)}</div>
  );
};

export default Content;
