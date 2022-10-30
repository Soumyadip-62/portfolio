import React from "react";
import Image from "../../images/Crypto.png";
const Crypto = () => {

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="p-4 flex-initial md:w-[70%] w-full col-span-2">
        <img
          src={Image}
          alt=""
          className="shadow-black  rounded-lg shadow-lg border-gray-400 border-2"
        />
      </div>
      <div className="flex-col">
        <header className="text-4xl font-semibold p-4">
          Chrome extension for Crypto Prices
        </header>
        <div className="w-64 p-4">
          <p className="text-xl">
            This extension uses an API to collect and view real time prices of
            Top 50 crypto currencies according to Market Cap.
          </p>
          <a
            href="https://github.com/Soumyadip-62/crypto-price-extention"
            target="_blank"
            className="text-black font-thin mt-6 underline"
          >
            Source Code 
          </a>
        </div>
        <div className="p-4 flex gap-4">
          <p className="techs">HTML</p>
          <p className="techs">Css</p>
          <p className="techs">JavaScript</p>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
