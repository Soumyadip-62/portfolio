import React from "react";
import Image from "../../images/Calculator.png";
const Calculator = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="p-4 flex-initial md:w-[70%] w-full col-span-2 ">
        <img
          src={Image}
          alt=""
          className=" shadow-black  rounded-lg shadow-lg border-gray-400 border-2"
        />
      </div>
      <div className="flex-col">
        <header className="text-4xl font-semibold p-4">
          Calculator With React
        </header>
        <div className="w-64 p-4">
          <p className="text-xl text-clip overflow-hidden">
            This is a simple calculator built using React. It also has a Button
            to toggle between Dark and Light mode.
          </p>
          <a
            href="https://soumyadip-62.github.io/calculator"
            target="_blank"
            className="text-black font-thin mt-6 underline"
          >
            See website
          </a>
        </div>
        <div className="p-4 flex gap-4">
          <p className="techs">React</p>
          <p className="techs">TailWind Css</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
