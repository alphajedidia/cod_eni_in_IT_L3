"use client";

import { type FC } from "react";
import { Heart } from "lucide-react";
import { usePathname } from "next/navigation";

import { links } from "@/constants/links";
import NavLink from "../../Common/NavLink";

const Footer: FC = () => {
  const pathname = usePathname();
  return (
    <footer className="w-full border-t-[1px] bg-custom-soft-green/10 border-slate-300 mt-24">
      <div className="flex flex-row justify-between items-center px-12 py-12">
        <p className="w-1/4 flex gap-3 items-center justify-start text-sm  text-custom-secondary">
          <Heart className="size-6 text-red-600 font-bold" /> Made by in_it
        </p>
        <nav className="w-3/4 flex justify-end items-center">
          <div className="flex gap-4 rounded-full">
            {/* {links.map((link) => (
              <NavLink
                key={`${link.href}footer`}
                href={link.href}
                label={link.label}
                kind={pathname === link.href ? "active" : "default"}
              />
            ))} */}
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
