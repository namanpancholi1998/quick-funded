import React from "react";
import { TrendingUp, Scale } from "lucide-react";

const QuickFundedDashboard = () => {
  return (
    <div className="w-full justify-around max-w-[1438px] flex mt-16 max-md:mt-10 max-md:max-w-full max-md:flex-col max-md:gap-0">
      {/* // <div className="mt-20    bg-cover bg-center"> */}
      <div className="flex justify-between items-start max-md:flex-col max-md:items-center">
        <div
          className="flex flex-col max-w-lg mt-24 bg-clip-text 
            bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] leading-[60px] 
            max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
        >
          <h1 className="text-[54px] font-bold bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)s] text-transparent mb-2 max-md:text-3xl mx-3">
            QuickFunded
          </h1>
          <p
            className="mb-8 mt-4 text-[17px] leading-7 bg-clip-text 
              bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-[#121316] opacity-[72%] max-md:max-w-full mx-3"
          >
            QuickFunded was founded in London by a group of accomplished
            traders. Our goal is to build a community of ambitious traders who
            are eager to achieve their highest aspirations.
          </p>
        </div>
        <div className="flex max-w-8xl bg-full max-md:mt-8 max-md:max-w-full">
          <img src="../dashboard.jpg" className="w-[600px] max-md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default QuickFundedDashboard;
