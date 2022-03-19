import React from "react";
import HeroImge from "../images/IMG-20210421-WA0020.jpg";

const Hero = () => {
  return (
    <>
      <div
        className=" p-10 text-white flex-col justify-center items-center"
        id="hero"
      >
        <div id="nav" className="grid grid-cols-1">
          <a href="#" className="hover:bg-fonts w-20 p-1">
            About
          </a>
          <a href="#projects" className="hover:bg-fonts w-20 p-1  ">
            Projects
          </a>
          <a href="#education" className="hover:bg-fonts w-20 p-1  ">
            Education
          </a>

          <a href="#contact" className="hover:bg-fonts w-20 p-1  ">
            Contacts
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center mt-3">
          <div data-aos="fade-right">
            <p
              id="hero-text"
              className="font-bold text-6xl mb-2 drop-shadow-xl shadow-fonts"
            >
              HI, I'm Soumyadip Pandit
            </p>
            <p className="font-thin text-xl">
              I graduated last year with a BCA degree from VIvekanda
              Mahavidyalaya with a 65.1% overall percentage. Currently working
              as a{" "}
              <span className="font-semibold" id="hero-text2">
                Front End Developer at Think Again Lab
              </span>
              . I am equipped with knowledge of web development with React. I
              have developed a few projects myself. I am looking forward to
              learning more and building a prosperous career in this field.
            </p>
          </div>

          <div className="image-bg" data-aos="fade-left">
            <img
              src={HeroImge}
              alt=""
              className="h-80 w-80 mt-12 mb-10 rounded-full shadow-lg drop-shadow-lg shadow-fonts"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
