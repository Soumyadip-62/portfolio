import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Calculator from "./slides/Calculator";
import Crypto from "./slides/Crypto";
import TicTacToe from "./slides/TicTacToe";
import BudgetTracker from "./slides/Mern";
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    arrows: false,
  };

  return (
    <div
      className="p-1 m-1 mt-12 md:p-5 md:m-10 text-fonts"
      id="projects"
      data-aos="fade-up"
    >
      <div className="text-center text-2xl font-sans font-bold mb-6">
        <header>My Projects</header>
      </div>{" "}
      <div>
        <Slider {...settings}>
          {/* <div className="p-3">
            <p className="font-bold text-6xl w-[40%] project-heading">
              Projects that I built myself
            </p>
            <p className="font-semibold pt-4 text-lg">Swipe right {":-)"}</p>
          </div> */}
          <div>
            <BudgetTracker />
          </div>
          <div>
            <Calculator />
          </div>
          <div>
            <Crypto />
          </div>
          <div>
            <TicTacToe />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
