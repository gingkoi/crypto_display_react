import React from "react";
import { SiCoinmarketcap } from "react-icons/si";

function NavBar() {
  return (
    <div className="flex justify-center items-center pt-10 font-bold">
      <SiCoinmarketcap className="text-2xl text-[#3d6dfb]" size={40} />
      <h1 className="text-3xl text-black">
        Coin<span className="text-[#3d6dfb]">Marketplace</span>
      </h1>
    </div>
  );
}

export default NavBar;
