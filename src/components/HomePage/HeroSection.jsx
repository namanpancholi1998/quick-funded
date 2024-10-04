import React from "react";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content flex items-center justify-between gap-5 max-md:flex-col max-md:gap-0">
        {/* Hero Left Section */}
        <div className="hero-left flex flex-col w-full max-md:w-full ">
          <div className="hero-left-text flex flex-col mt-24 self-stretch px-5 leading-[100%] max-md:mt-10">
            <h1 className="text-5xl font-bold bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 leading-[60px] max-md:text-4xl max-md:leading-[53px]">
              Your Trading Journey,
              <br />
              <span className="font-[54px] bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)s] text-transparent">
                Our Investment Expertise!{" "}
              </span>
            </h1>
            <p className=" text-[18px]  opacity-[72%] mt-4 text-xl leading-9 bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 text-gray-700 opacity-72 max-md:max-w-full">
              Excel through our QUICKFUNDED challenge and join our professional
              team of traders. Unlock the opportunity to trade with up to{" "}
              <span className=" text-[#99fb07]">$2 Million</span> in Funds!
            </p>
            <button className="hero-button justify-center max-md:px-5 py-3 my-5 px-8 text-base font-semibold text-white bg-gradient-to-r from-green-400 to-emerald-600 rounded-full max-md:mt-10 ">
              Buy Challenge
            </button>
          </div>
        </div>

        {/* Hero Right Section */}
        <div className="hero-right flex justify-center items-center w-full max-md:w-full">
          <img
            src="../homepageimg.png"
            alt="Hero Image"
            className="hero-image grow w-full aspect-[1.2] max-md:mt-10"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
