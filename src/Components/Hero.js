import React from "react";
import HeroImge from "../images/IMG-20210421-WA0020.jpg";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard, faDownload } from "@fortawesome/free-solid-svg-icons";
import { handleDownloadContact } from "./Contact";
const Hero = () => {
  return (
    <>
      <div
        className="p-10 text-white flex-col  justify-center items-center"
        id="hero"
      >
        <div
          id="nav"
          className="flex justify-start md:justify-between gap-3 p-1 md:text-xl"
        >
          <button
            onClick={handleDownloadContact}
            className="hover:font-semibold"
          >
            Save Contact
          </button>
          <a
            href="SoumyaDip_Pandit_Resume.docx"
            download
            className="hover:font-semibold"
          >
            Resume
          </a>
          {/* <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="hover:font-semibold hover:text-fonts  "
          >
            Experience
          </Link> */}

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

          {/* <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="hover:font-semibold hover:text-fonts   "
          >
            Contacts
          </Link> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center mt-3">
          <div data-aos="fade-right">
            <p
              id="hero-text"
              className="font-normal text-2xl md:text-2xl mb-2 drop-shadow-xl shadow-fonts"
            >
              HI, I'm Soumyadip Pandit
            </p>

            <p className="font-normal text-m">
              a front-end developer with 1 year of experience. I'm passionate
              about creating beautiful and user-friendly websites. I'm
              proficient in <span className="under-line">HTML</span> ,{" "}
              <span className="under-line"> CSS</span>,{" "}
              <span className="under-line"> JavaScript</span>, and{" "}
              <span className="under-line"> TypeScript</span> and I have
              experience with a variety of front-end frameworks, including{" "}
              <span className="under-line"> React</span>, and{" "}
              <span className="under-line"> NextJS</span>. I'm excited to share
              my work with you, and I'm confident that I can be a valuable asset
              to your team. Please feel free to contact me if you have any
              questions.
            </p>

            <a
              href="https://www.linkedin.com/in/soumyadip-pandit-8a2b881a3/"
              target="_blank"
              className="text-yellow-100 font-thin mt-8 underline"
              rel="noreferrer"
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
