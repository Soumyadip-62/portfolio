import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMailBulk,
  faDownload,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { contact } from "./savecontact";

export const handleDownloadContact = () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:${contact.name}
TEL;TYPE=CELL;TYPE=VOICE:${contact.phone}
EMAIL:${contact.email}
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Soumyadip.vcf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
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
          <a
            href="SoumyaDip_Pandit_Resume.docx"
            download
            className="font-semibold"
          >
            Download Resume <FontAwesomeIcon icon={faDownload} />
          </a>
          <br></br>
        </div>

        <div className="">
          <header className="font-bold text-3xl pb-4">Social</header>

          <ul className="grid text-start font-semibold">
            <button onClick={handleDownloadContact} className="font-semibold">
              Save Contact <FontAwesomeIcon icon={faContactCard} />
            </button>
            <a
              href="https://www.linkedin.com/in/soumyadip-pandit-8a2b881a3/"
              target="_blank"
            >
              {" "}
              LinkedIn <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="https://github.com/Soumyadip-62" target="_blank">
              {" "}
              GitHub <FontAwesomeIcon icon={faGit} />
            </a>
          </ul>
        </div>
      </div>
      <p class="text-center p-4 font-thin text-gray-200 text-xs">
        ©2023 Portfolio by Soumyadip Pandit. All rights reserved.
      </p>
    </>
  );
};

export default Contact;
