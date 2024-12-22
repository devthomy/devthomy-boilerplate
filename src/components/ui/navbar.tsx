import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import React from "react";

interface NavbarMobileProps {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  setOpenSidebar,
}) => {
  return (
    <div className="md:hidden flex items-center justify-between bg-primary-dark w-full px-4 py-2 h-16 ">
      <button
        onClick={() => setOpenSidebar(true)}
        className="text-white hover:text-primary-custom transition-colors p-2 flex items-center justify-center"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
      <div className="flex items-center space-x-4">
        <UserButton afterSignOutUrl="/" />

      </div>
    </div>
  );
};

export default NavbarMobile;
