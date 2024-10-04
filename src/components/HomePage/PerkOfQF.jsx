import React from "react";

const PerksCard = ({ icon, title, description, color }) => (
  <div
    className={`bg-${color}-500 p-6 rounded-3xl text-white flex flex-col items-center text-center`}
  >
    <div className="bg-white rounded-full p-2 my-6">
      <img src={icon} alt={title} className="w-15 h-15" />
    </div>
    <h3 className="text-3xl font-bold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

const PerkOfQF = () => {
  const perks = [
    {
      icon: "../refund-1.png",
      title: "20% Refund",
      description:
        "In the event that you do not succeed in the challenge, we will reimburse 20% of the fee.",
      color: "blue",
    },
    {
      icon: "../payout-1.png",
      title: "Bi-Weekly Payouts",
      description:
        "At the funded stage, you can make withdrawals every two weeks.",
      color: "green",
    },
    {
      icon: "../withdrawl-1.png",
      title: "80% Withdrawal",
      description:
        "Enjoy 80% share on your first withdrawal, with no profit targets on funded accounts.",
      color: "orange",
    },
    {
      icon: "../money.png",
      title: "Scale Up To 2 Million",
      description:
        "We offer you a scaling plan with funding of up to 2 million.",
      color: "teal",
    },
    {
      icon: "../match-trader-1.png",
      title: "Match Trader",
      description:
        "Match Trader offers an intuitive and efficient platform for seamless trading experiences.",
      color: "purple",
    },
  ];

  return (
    <div
      className="w-full max-w-[1438px] px-14 p-8 mt-4 rounded-lg bg-clip-text 
                bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] leading-[60px] 
                max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
    >
      <h2 className="text-4x text-[54px] font-bold bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)s] text-transparent mb-2">
        Perks Of QuickFunded
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {perks.map((perk, index) => (
          <PerksCard key={index} {...perk} />
        ))}
      </div>
    </div>
  );
};

export default PerkOfQF;
