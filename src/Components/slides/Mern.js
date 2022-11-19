import React from "react";
import Image from "../../images/budget.png";
const BudgetTracker = () => {
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
          Full Stack Budget Tracker Application (PWA)
        </header>
        <div className="w-64 p-4">
          <p className="text-xl">
            This is a full stack budget tracker Progressive web app built with
            Node, Express, Mongodb, Nextjs.
          </p>
          <a
            href="https://budget-tracker-caspian.netlify.app/"
            target="_blank"
            className="text-black font-thin mt-6 underline"
          >
            See Website
          </a>
        </div>
        <div className="p-4 flex flex-wrap gap-4">
          <p className="techs">NextJs</p>
          <p className="techs">ExpressJs</p>
          <p className="techs">NodeJS</p>
          <p className="techs">MongoDB</p>
          <p className="techs">Tailwind</p>
          <p className="techs">ChartJs</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
