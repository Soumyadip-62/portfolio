import React from "react";
import Courses from "./Courses";

const Education = () => {
  return (
    <div
      className="mt-12 mb-0 p-5 text-fonts"
      id="education"
      data-aos="fade-up"
    >
      <div className="text-center text-2xl font-sans font-bold">
        <header>My Educational Background</header>
      </div>

      <div class="grid grid-cols-1 text-center mt-12 md:grid-cols-3 md:text-left ">
        <div class=" p-4 m-1 md:m-4  shadow-md shadow-slate-900 rounded-xl hover:bg-secondary hover:text-white hover:shadow-xl hover:shadow-black duration-300">
          <p class="font-semibold p-1 text-2xl   rounded-sm pt-4 pb-1 ">
            Graduation
          </p>
          <p class="p-1">Vivekananda Mahavidyalaya (BCA)</p>
          <p class="p-1">65.10%</p>
          <p class="p-1">08/2018 – 09/2021</p>
        </div>
        <div class=" p-4 m-1 md:m-4  shadow-md shadow-slate-900 rounded-xl hover:bg-secondary hover:text-white hover:shadow-xl hover:shadow-black duration-300 ">
          <p class="font-semibold p-1 text-2xl  pt-4 pb-1 ">Higher Secondary</p>
          <p class="p-1">Ilsoba Mondlai High School (XII)</p>
          <p class="p-1">71.60%</p>
          <p class="p-1">2016 – 2018</p>
          <p class="p-1">WBCHSE BOARD</p>
        </div>
        <div class=" p-4 m-1 md:m-4  shadow-md shadow-slate-900 rounded-xl hover:bg-secondary hover:text-white hover:shadow-xl hover:shadow-black duration-300 ">
          <p class="font-semibold p-1 text-2xl  pt-4 pb-1 ">Secondary</p>
          <p class="p-1">Ilsoba Mondlai High School (X)</p>
          <p class="p-1">72.50%</p>
          <p class="p-1">2016</p>
          <p class="p-1">WBBSE BOARD</p>
        </div>
      </div>

      <div data-aos="fade-up">
        <Courses />
      </div>
    </div>
  );
};

export default Education;
