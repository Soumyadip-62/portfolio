import React from 'react'
import htmlLogo from "../images/Logos/html5-without-wordmark-color.svg";
import cssLogo from "../images/Logos/css-3-seeklogo.com.svg";
import JsLogo from "../images/Logos/javascript-seeklogo.com.svg";
import ReactLogo from '../images/Logos/reactjs-icon.svg'
import NextLogo from "../images/Logos/next-js-seeklogo.com.svg";
import ExpressLogo from "../images/Logos/express-seeklogo.com.svg";
import NodeLogo from "../images/Logos/nodejs-seeklogo.com.svg";
import mongoLogo from "../images/Logos/mongodb-seeklogo.com.svg";
import bootstrapLogo from "../images/Logos/bootstrap-5-seeklogo.com.svg";
import npmLogo from "../images/Logos/npm-seeklogo.com-2.svg";
import githubLogo from "../images/Logos/github-seeklogo.com.svg";
import tailwindLogo from "../images/Logos/tailwind-css-wordmark-seeklogo.com.svg";
import tslogo from "../images/Logos/typescript.svg";

const Skills = () => {
  return (
    <div id="skills" className="md:p-12 p-5  ">
      <div className="flex flex-wrap md:gap-10 gap-3 justify-center ">
        <img src={htmlLogo} alt="html" className="logoimg" />
        <img src={cssLogo} alt=" css" className="logoimg" />
        <img src={JsLogo} alt=" javascript" className="logoimg" />
        <img src={tslogo} alt=" typescript" className="logoimg" />
        <img src={ReactLogo} alt=" react" className="logoimg" />
        <img src={NextLogo} alt=" nextjs" className="logoimg" />
        <img src={ExpressLogo} alt=" express" className="logoimg" />
        <img src={NodeLogo} alt=" nodejs" className="logoimg" />
        <img src={mongoLogo} alt=" mongodb" className="logoimg" />
        <img src={bootstrapLogo} alt=" bootstrap" className="logoimg" />
        <img src={npmLogo} alt=" npm" className="logoimg" />
        <img src={githubLogo} alt=" github" className="logoimg" />
        <img src={tailwindLogo} alt=" tailwind" className="logoimg" />
      </div>
    </div>
  );
}

export default Skills