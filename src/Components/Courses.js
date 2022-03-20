import React from "react";

const Courses = () => {
  return (
    <div className="text-fonts">
      {" "}
      <div class=" pt-6 pr-1 pl-1 md:pr-6 md:pl-6 pb-0 ">
        <div class="flex justify-center item-start">
          <p class="text-2xl font-bold">Courses</p>
        </div>
        <div class="p-1 md:p-4 grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
          <div class="hover:bg-secondary  hover:text-white  hover:shadow-xl hover:shadow-black duration-300 p-2  md:p-8 m-1 mt-4 shadow-md shadow-slate-900 rounded-xl md:m-4">
            <p class="font-semibold text-bgcom text-2xl pb-6 ">
              React Certification Course (Internshala):{" "}
            </p>
            <p class="font-light">
              In this 1.5 Months online training programme I managed to learn
              the basics of JavaScript. I learnt the React library and built few
              projects using it.{" "}
            </p>
          </div>
          <div className="hover:bg-secondary  hover:text-white hover:shadow-xl hover:shadow-black  duration-300 p-2  md:p-8 m-1 mt-4 shadow-md shadow-slate-900 rounded-xl md:m-4">
            <p class="font-semibold text-bgcom text-2xl pb-6 ">
              Python Certification Course (Leafy Solutions):
            </p>
            <p class="font-light">
              In this 6 months training I learnt the basics of python. And
              learnt the Django framework also built an Event Management website
              project using it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
