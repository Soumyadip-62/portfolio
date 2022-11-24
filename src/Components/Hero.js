import React from "react";
import HeroImge from "../images/IMG-20210421-WA0020.jpg";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <>
      <div
        className="p-10 text-white flex-col  justify-center items-center"
        id="hero"
      >
        <div
          id="nav"
          className="flex justify-start md:justify-between gap-4 p-1 md:text-xl"
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="hover:font-semibold hover:text-fonts   "
          >
            Experience
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:font-semibold hover:text-fonts "
          >
            Projects
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="hover:font-semibold hover:text-fonts   "
          >
            Education
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="hover:font-semibold hover:text-fonts   "
          >
            Contacts
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center mt-3">
          <div data-aos="fade-right">
            <p className="font-normal text-2xl md:text-2xl mb-2 drop-shadow-xl shadow-fonts">
              HI, I'm Soumyadip Pandit
            </p>

            <p id="hero-text" className="font-semibold text-4xl">
              Working as a Front End Developer at{" "}
              <a
                href="https://thinkagainlab.com/"
                target="_blank"
                className="font-semibold "
                id="hero-text2"
              >
                Think Again Lab
              </a>
              .
            </p>
            <p className="font-thin text-md md:text-md mb-2 drop-shadow-xl shadow-fonts">
              JavaScript, React, Next, Node, Mongodb
            </p>
            <a
              href="https://www.linkedin.com/in/soumyadip-pandit-8a2b881a3/"
              target="_blank"
              className="text-yellow-100 font-thin mt-8 underline"
            >
              Find Me On LinkedIn {">>"}
            </a>
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
