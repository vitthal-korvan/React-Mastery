import React from "react";
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";

const Navbar = () => {
  return (
    <div className=" w-full flex items-center justify-between px-7  py-6">
      <Logo />
      <Menu />
    </div>
  );
};

export default Navbar;
