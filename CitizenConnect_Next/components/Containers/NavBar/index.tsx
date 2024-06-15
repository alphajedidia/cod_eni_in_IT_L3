"use client";

import { type FC } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import NavLink from "@/components/Common/NavLink";
import Logo from "@/components/Common/Logo";
import Link from "next/link";
import { links } from "@/constants/links";

type NavbarProps = {
  isLoggedIn: boolean;
};

const Navbar: FC<NavbarProps> = ({ isLoggedIn }) => {
  const pathname = usePathname();

  return (
    <motion.div
      layout="position"
      className={`sticky top-0 flex justify-between items-center z-50 bg-white border-slate-300  mb-8 px-safe-md`}
    >
      <div className="w-1/6 flex justify-start -translate-x-6">
        <Logo href="/" src="/CitizenConnect.svg" />
      </div>

      <div className="flex items-center justify-end gap-6 ml-6 w-3/6">
        {isLoggedIn && (
          <nav className="flex gap-2 justify-center items-center">
            {links.map((link) => (
              <NavLink
                key={`${link.href}link`}
                href={link.href}
                label={link.label}
                kind={pathname === link.href ? "active" : "default"}
              />
            ))}
          </nav>
        )}
        <Link
          href="#"
          className="text-sm tracking-wide font-semibold bg-custom-blue text-custom-white rounded-full  px-8 py-2.5"
        >
          Se connecter
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
