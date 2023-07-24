import React from "react";

const Navbar = () => {
  return (
    <div className="fixed flex w-full px-16 py-6 bg-white shadow-sm">
      <span className="font-bold text-2xl">DaisyDaisy</span>
      <div className="ml-auto flex gap-8">
        <span className="font-bold text-xl">Home</span>
        <span className="font-bold text-xl">About</span>
        <span className="font-bold text-xl">Projects</span>
        <span className="font-bold text-xl">Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
