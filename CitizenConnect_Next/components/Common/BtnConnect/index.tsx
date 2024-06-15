import type { FC } from "react";
import { Link } from "lucide-react";

const BtnConnect: FC = () => {
  return (
    <Link
      href="#"
      className="text-sm tracking-wide font-semibold bg-custom-blue text-custom-white rounded-full  px-8 py-2.5"
    >
      Se connecter
    </Link>
  );
};

export default BtnConnect;
