import React from "react";
import HeroImge from "../images/IMG-20210421-WA0020.jpg";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <>
      <div
        className=" p-10 text-white flex-col justify-center items-center"
        id="hero"
      >
        <div id="nav" className="grid grid-cols-1">
          <Link
            to="hero-text"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:bg-fonts w-20 p-1"
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="hover:bg-fonts w-20 p-1  "
          >
            Projects
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="hover:bg-fonts w-20 p-1  "
          >
            Education
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="hover:bg-fonts w-20 p-1  "
          >
            Contacts
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center mt-3">
          <div data-aos="fade-right">
            <p
              id="hero-text"
              className="font-bold text-4xl md:text-6xl mb-2 drop-shadow-xl shadow-fonts"
            >
              HI, I'm Soumyadip Pandit
            </p>
            <p className="font-thin text-xl">
              I graduated last year with a BCA degree from VIvekananda
              Mahavidyalaya. Currently working as a{" "}
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
              className=" sm:w-80  w-auto md:h-80 md:w-80 mt-12 mb-10 rounded-full shadow-lg drop-shadow-lg shadow-fonts"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
