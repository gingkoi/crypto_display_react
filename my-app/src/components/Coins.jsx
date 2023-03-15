import React from "react";
import CoinItem from "./CoinItem";
import "./Coins.css";

function Coins(props) {
  return (
    <div className="container m-auto">
      <div>
        <div className="flex items-center justify-between font-bold px-10 py-5 my-5 mx-5 border rounded-xl bg-[#3d6dfb]">
          <p>#</p>
          <p className="-ml-5">Coins</p>
          <p>Prices</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Total Marketcap</p>
        </div>

        {props.coins.map((coins) => {
          return <CoinItem coins={coins} key={coins.id} />;
        })}
      </div>
    </div>
  );
}

export default Coins;
