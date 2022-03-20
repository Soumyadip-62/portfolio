import React from "react";
import Image from "../../images/Tictac.png";
const TicTacToe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      <div className="p-4 flex-initial md:w-[70%] w-full col-span-2">
        <img
          src={Image}
          alt=""
          className=" shadow-black rounded-lg shadow-lg border-gray-400 border-2"
        />
      </div>
      <div className="flex-col">
        <header className="text-4xl font-semibold p-4">
          TicTacToe Application
        </header>
        <div className="w-64 p-4">
          <p className="text-xl">
            This is a simple tic tac toe game that I made using React. This
            project is part of my online React training course.
          </p>
          <a
            href="https://tictaccaspian.surge.sh/"
            target="_blank"
            className="text-black font-thin mt-6 underline"
          >
            See Website
          </a>
        </div>
        <div className="p-4 flex gap-4">
          <p className="techs">React</p>
          <p className="techs">SASS</p>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
