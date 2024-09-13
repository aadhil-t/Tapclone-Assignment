import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { BiJoystick } from "react-icons/bi";
import bg from "../assets/Bg.png";
import person from "../assets/person.png";
function Hero() {
  return (
    <div className="  flex flex-col md:h-screen">
    <div className="md:screen-container relative bg-gradient-to-r from-purple-600 to-blue-600 flex-1 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="relative top-1/3 md:top-1/3 z-10 flex flex-col md:flex-row h-full px-4 md:px-8">
        <div className="md:text-left flex-1">
        <p className="text-base md:text-xl font-normal hidden md:block">
  Professional Certification & Degree Programs
</p>

          <h1 className="text-2xl md:text-4xl lg:text-6xl font-medium mt-3">
            Accelerate your{" "}
            <span className="text-[#01F19B]">
              Career <br /> Growth
            </span>{" "}
            & UpskillYourself
          </h1>
  
          <div className="relative w-full max-w-xs md:max-w-sm mt-6 md:mt-10">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full bg-[#dddddd34] text-white px-4 py-3 border border-[#DDDDDD5C] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute inset-y-1 right-1 px-4 py-2 bg-[#01F19B] text-[#272626] font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-14 mt-12">
            <div className="w-full md:w-[210px] h-auto md:h-[210px] bg-transparent border px-5 py-6 md:py-10">
              <div className="flex text-2xl md:text-3xl pb-6 pt-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <h1 className="text-2xl md:text-3xl">4.8/5</h1>
              <h2 className="text-xl md:text-2xl">rating</h2>
            </div>
            <div className="w-full md:w-[210px] h-auto md:h-[210px] bg-transparent border px-5 py-6 md:py-10">
              <div className="flex text-5xl md:text-6xl pb-3">
                <GiStairsGoal />
              </div>
              <h2 className="text-lg md:text-2xl">1000 career transactions</h2>
            </div>
            <div className="w-full md:w-[210px] h-auto md:h-[210px] bg-transparent border px-5 py-6">
              <div className="flex text-4xl md:text-7xl pb-1">
                <BiJoystick />
              </div>
              <h2 className="text-base md:text-xl">
                Gamified Learning 24*7 learning Support.
              </h2>
            </div>
            <div className="w-full md:w-[210px] h-auto md:h-[210px] bg-transparent border px-5 py-6 md:py-10">
              <div className="flex text-xl md:text-2xl pb-1"></div>
              <h2 className="text-base md:text-2xl">1:1 with industry mentors</h2>
            </div>
          </div>
        </div>
        <div className="md:absolute right-0 md:right-[24rem] mt-6 md:mt-0">
          <img className="w-full md:w-[684px]" src={person} alt="" />
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Hero;
