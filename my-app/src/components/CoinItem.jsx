import React from "react";
import { useState } from "react";

function CoinItem(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div onClick={handleClick}>
      <div className={click ? "scale-105 mx-5" : "scale-100 mx-5"}>
        <div className="flex items-center justify-between px-10 py-5 my-1 hover:scale-105 bg-white rounded-xl border border-[#3d6dfb]/30 hover:bg-blue-100/30 transition duration-300 ease-in-out cursor-pointer text-black container">
          <p className="bg">{props.coins.market_cap_rank}</p>
          <div className="flex items-center">
            <img src={props.coins.image} alt="/" className="w-[40px] mr-2" />
            <p className="font-bold">{props.coins.symbol.toUpperCase()}</p>
          </div>
          <p>${props.coins.current_price.toLocaleString()}</p>
          <p
            className={
              props.coins.price_change_percentage_24h > 0
                ? "text-green-500 font-bold"
                : "text-red-600 font-bold"
            }
          >
            {props.coins.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className="hide-mobile">
            ${props.coins.total_volume.toLocaleString()}
          </p>
          <p className="hide-mobile">
            ${props.coins.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
      <div className={click ? "block" : "hidden"}>
        <div className="rounded-b-xl bg-[#3d6dfb] scale-[102%] mb-5 mx-5 transition duration-5000 px-10 py-10 text-white">
          <p className="text-3xl font-bold mb-5">
            Rank {props.coins.market_cap_rank} ({props.coins.name}/USD)
          </p>
          <div className=" xl:flex justify-around space-y-3 xl:space-y-0 ">
            <div className="space-y-5 xl:space-y-1 ">
              <div className="xl:flex justify-between border-b-2 border-white">
                <p className="mr-20 ">24 Hour Low</p>
                <p className="text-3xl font-bold">
                  ${props.coins.low_24h.toLocaleString()}
                </p>
              </div>
              <div className="xl:flex justify-between border-b-2 border-white">
                <p className="mr-20">24 Hour High</p>
                <p className="text-3xl font-bold">
                  ${props.coins.high_24h.toLocaleString()}
                </p>
              </div>
              <div className="xl:flex justify-between border-b-2 border-white hidden">
                <p className="mr-20">All Time High</p>
                <p className="text-3xl font-bold">
                  ${props.coins.ath.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="space-y-5 xl:space-y-1 ">
              <div className="xl:flex justify-between border-b-2 border-white">
                <p className="mr-20">MarketCap</p>
                <p className="text-3xl font-bold">
                  ${props.coins.market_cap.toLocaleString()}
                </p>
              </div>
              <div className="xl:flex justify-between border-b-2 border-white">
                <p className="mr-20">Circulating Supply</p>
                <p className="text-3xl font-bold">
                  {props.coins.circulating_supply.toLocaleString()}
                </p>
              </div>
              <div className="xl:hidden justify-between border-b-2 border-white">
                <p className="mr-20">All Time High</p>
                <p className="text-3xl font-bold">
                  ${props.coins.ath.toLocaleString()}
                </p>
              </div>
              <div className="xl:flex justify-between border-b-2 border-white">
                <p className="mr-20">All Time Low</p>
                <p className="text-3xl font-bold">
                  ${props.coins.atl.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinItem;
