import React from "react";
import { FileText, ListChecks, CheckCircle, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText />,
      title: "Sign Up",
      description:
        "Scale up to $2 Millions in simulated we do not deduct payout amounts from your balance when you request it.",
    },
    {
      icon: <ListChecks />,
      title: "Evaluate",
      description:
        "As soon as you receive your login credentials, you are free to trade and work towards achieving the profit target to progress to the next stage.",
    },
    {
      icon: <CheckCircle />,
      title: "Verification",
      description:
        "At this stage, you'll need to submit your documents for KYC verification. Once KYC is completed, we'll proceed to provide you with the login for the simulated funded account.",
    },
    {
      icon: <Users />,
      title: "Funded",
      description:
        "At this stage, you are ready to start earning. As a Quick Funded customer, you'll enjoy the benefit of receiving 85% of your profit share on your first withdrawal.",
    },
  ];

  return (
    <div className="w-full px-14 justify-around max-w-[1238px] mx-auto mt-16 max-md:mt-10 max-md:max-w-full p-8 border-black shadow-lg rounded-3xl">
      <div className="">
        <h1
          className="text-[54px] font-bold bg-clip-text sm:text-5xl sm:leading-[50px]
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] mb-2 text-transparent -ml-2"
        >
          How It Works
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 py-16 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col justify-start items-start ">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center  mb-4 ${
                index === 0
                  ? "bg-green-500"
                  : index === 1
                  ? "bg-blue-500"
                  : index === 2
                  ? "bg-orange-500"
                  : "bg-purple-500"
              }`}
            >
              {React.cloneElement(step.icon, {
                className: "text-white",
                size: 30,
              })}
            </div>
            <h3 className="text-[24px] font-bold mb-2">
              <span>{index + 1}. </span>

              {step.title}
            </h3>
            <p className="text-[#121316] opacity-[72%] text-start">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
