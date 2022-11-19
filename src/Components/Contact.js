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
        className="overflow-clip pt-12  p2-4 pl-2 md:pr-20 md:pl-20 m-4 mt-0 mb-0 h-auto
        pb-12 text-white text-start md:text-justify grid grid-cols-2 gap-4 justify-items-center md:grid-flow-col"
      >
        <div className="">
          <header className="font-bold text-3xl pb-4 ">Contact</header>
          <a href="tel:+917001120224" className="font-semibold">
            Talk to me! <FontAwesomeIcon icon={faPhone} />
          </a>
          <br></br>
          <a href="mailto:panditsoumya35@gmail.com" className="font-semibold">
            Send an email <FontAwesomeIcon icon={faMailBulk} />
          </a>{" "}
          <br></br>
          <a href="Resume.pdf" download className="font-semibold">
            Download Resume <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>

        <div className="">
          <header className="font-bold text-3xl pb-4">Social</header>

          <ul className="grid text-start font-semibold">
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
      <p class="text-center p-4 font-thin text-gray-200 text-xs">
        ©2022 Portfolio by Soumyadip Pandit. All rights reserved.
      </p>
    </>
  );
};

export default Contact;
