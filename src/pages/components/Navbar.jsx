import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed flex w-full px-16 py-6 bg-white shadow-sm z-20">
      <span className="font-bold text-2xl">DaisyDaisy</span>
      <div className="ml-auto flex gap-8">
        <Link href="/" className="font-bold text-xl">
          Home
        </Link>
        <Link href="/#about" className="font-bold text-xl">
          About
        </Link>
        <Link href="/#projects" className="font-bold text-xl">
          Projects
        </Link>
        <Link href="/#contacts" className="font-bold text-xl">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
