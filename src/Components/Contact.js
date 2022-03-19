import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMailBulk,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="pt-6 pr-20 pl-20 m-6 mb-0 h-64 text-white text-center md:text-justify grid grid-cols-1 md:grid-flow-col"
      >
        <div className="">
          <header className="font-bold text-2xl pb-4 ">Contact</header>
          <a href="tel:+917001120224">
            Talk to me! <FontAwesomeIcon icon={faPhone} />
          </a>
          <br></br>
          <a href="mailto:someone@example.com">
            Send an email <FontAwesomeIcon icon={faMailBulk} />
          </a>{" "}
          <br></br>
          <a href="Resume.pdf" download>
            Download Resume <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>

        <div className="">
          <header className="font-bold text-2xl pb-4">Social</header>

          <ul className="grid gap-2">
            <a
              href="https://www.linkedin.com/in/soumyadip-pandit-8a2b881a3/"
              target="_blank"
            >
              {" "}
              LinkedIn <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/Soumyad51323508" target="_blank">
              {" "}
              Twiter <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a href="https://github.com/Soumyadip-62" target="_blank">
              {" "}
              GitHub <FontAwesomeIcon icon={faGit} />
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
