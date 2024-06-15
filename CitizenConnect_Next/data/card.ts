import CardItemType from "@/types/cardItemType";

export const CardData: CardItemType[] = [
  {
    title: "Passport",
    times: "48h",
    price: "250 000 Ariary",
    src: "/assets/passport.png",
    href: "/passport",
  },
  {
    title: "Act de naissance",
    times: "10h",
    price: "2 000 Ariary",
    src: "/assets/acteNaissance.png",
    href: "/acte-naissance",
  },
  {
    title: "Permis de conduire",
    times: "3h",
    price: "20 000 Ariary",
    src: "/assets/permis.png",
    href: "/permis", 
  },
  {
    title: "Act de mariage",
    times: "20h",
    price: "10 000 Ariary",
    src: "/assets/mariage.png",
    href: "/acte-mariage", // Add href property
  },
  // Repeat for other items
];
