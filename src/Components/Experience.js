import React from "react";

const Experience = () => {
  return (
    <div className="p-4 md:p-5  text-fonts" data-aos="fade-up">
      <div className="text-center text-2xl font-sans mt-12 mb-10 font-bold ">
        <header>Work Experience & Hackathons</header>
      </div>{" "}
      <div className="grid grid-cols-1 gap-6 mb-12 mt-12 md:grid-cols-2 md:text-left ">
        <div class=" p-4 m-1 md:m-4  shadow-md shadow-slate-900 rounded-xl  hover:shadow-xl hover:shadow-black duration-300">
          <p class="font-semibold p-1 text-2xl   rounded-sm pt-4 pb-1 ">
            Think Again Lab
          </p>
          <p class="p-1 text-lg font-semibold mb-4">Feb, 2022 – Present</p>
          <p class="p-1  text-lg mb-1 ">
            ❒ Maintained good coding standard and implemented various software
            solutions based on client requirements
          </p>
          <p class="p-1 text-lg mb-1 ">
            ❒ Taught React Development to student interns.
          </p>
          <p class="p-1 text-lg mb-1 ">
            ❒ Created an npm package for showing messages above forms and list
            of all country ISD codes{" "}
            <a
              href="https://www.npmjs.com/package/error-message-tal"
              target="blank"
              className="font-bold text-blue-600"
            >
              (See More)
            </a>
          </p>
        </div>

        <div class=" p-4 m-1 md:m-4  shadow-md shadow-slate-900 rounded-xl  hover:shadow-xl hover:shadow-black duration-300">
          <p class="font-semibold p-1 text-2xl   rounded-sm pt-4 pb-1 ">
            Participated In NASA Spaceapps Challange 2022
          </p>
          <p class="p-1 text-lg font-semibold mb-4">October, 2022</p>
          <p class="p-1 text-lg mb-1">
            ❒ This webapp tracks the international space station in realtime, in
            3d.
          </p>
          <p class="p-1 text-lg mb-1">
            ❒ I mostly worked on creating the earth in and researching informations about the ISS.
          </p>
          <p class="p-1">
            <a
              href=" https:/darkmortal.github.io/three-js-iss/"
              target="blank"
              className="font-bold text-blue-600"
            >
              (View Deployment)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
