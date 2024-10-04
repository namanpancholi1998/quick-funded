import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 bg-white text-green-600">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1
          className="text-5xl font-bold mb-4 bg-clip-text 
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent"
        >
          Discover The Key To Generate Passive Income.
        </h1>
        <p className="text-gray-700 mb-4">
          QUICKFUNDED is actively seeking committed partners who want to grow in
          an innovative and profitable market. Reach your goals with us!
        </p>
      </div>
      <div className="md:w-1/2 relative">
        <div>
          <img src="../affliate.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
