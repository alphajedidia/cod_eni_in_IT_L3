import { LogOut } from "lucide-react";
import type { FC } from "react";
import { useRouter } from "next/navigation";

const LogOutButton: FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 text-black rounded-md flex gap-4 hover:cursor-pointer hover:bg-custom-black hover:text-custom-white"
    >
      <LogOut /> Se déconnecter
    </button>
  );
};

export default LogOutButton;
