import React, { useState } from "react";

const AccountSize = () => {
  const [selectedStep, setSelectedStep] = useState("Two Step");
  const [selectedAccount, setSelectedAccount] = useState("5k");

  const accountPrices = {
    "5k": 59,
    "10k": 99,
    "25k": 159,
    "50k": 299,
    "100k": 499,
  };

  const challengeRules = {
    "Two Step": {
      profitTarget: ["10%", "5%", "N/A"],
      minTradingDays: ["3", "3", "3"],
      dailyDrawdown: ["5%", "5%", "5%"],
      overallDrawdown: ["10%", "10%", "10%"],
      tradingPeriod: ["Unlimited", "Unlimited", "Unlimited"],
      firstWithdrawal: ["N/A", "N/A", "Bi-Weekly"],
      profitSplit: ["N/A", "N/A", "Up to 95%"],
    },
    "One Step": {
      profitTarget: ["10%", "N/A"],
      minTradingDays: ["3", "3"],
      dailyDrawdown: ["4%", "4%"],
      overallDrawdown: ["6%", "6%"],
      tradingPeriod: ["Unlimited", "Unlimited"],
      firstWithdrawal: ["N/A", "Bi-Weekly"],
      profitSplit: ["N/A", "Up to 95%"],
    },
  };

  const RuleRow = ({ label, values }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-200">
      <span className=" font-bold w-1/4">{label}</span>
      {values.map((value, index) => (
        <span key={index} className="font-semibold w-1/4 text-center">
          {value}
        </span>
      ))}
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center max-md:gap-0">
      <div className="w-full px-4 py-6 flex flex-col items-center max-md:flex-wrap">
        <div className="flex justify-between w-full max-md:flex-wrap max-md:justify-center">
          <button
            className={`px-4 font-semibold text-xl py-2 rounded-xl ${
              selectedStep === "Two Step"
                ? "justify-center px-7 border py-[25px] text-base font-semibold text-white bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-xl max-md:px-5"
                : "bg-[#F1F1F1] text-gray-700"
            }`}
            onClick={() => setSelectedStep("Two Step")}
          >
            Two Step
          </button>
          <button
            className={`px-4 font-semibold text-xl py-2 rounded-lg ${
              selectedStep === "One Step"
                ? "justify-center px-7 border py-[25px] text-base font-semibold text-white bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-xl max-md:px-5"
                : "bg-[#F1F1F1] text-gray-700"
            }`}
            onClick={() => setSelectedStep("One Step")}
          >
            One Step
          </button>
        </div>

        <div className="flex justify-between w-full max-md:mt-4 max-md:flex-wrap max-md:justify-center">
          {Object.keys(accountPrices).map((account) => (
            <button
              key={account}
              className={`px-3 py-2 rounded-lg ${
                selectedAccount === account
                  ? "justify-center px-7 border py-[25px] text-base font-semibold text-white bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-xl max-md:px-5"
                  : "bg-[#F1F1F1] text-gray-700"
              }`}
              onClick={() => setSelectedAccount(account)}
            >
              {account}
            </button>
          ))}
        </div>

        <div className="text-center mt-4">
          <p className="text-5xl font-bold mb-4 text-start">
            ${accountPrices[selectedAccount]}
          </p>
          <button className="justify-center px-8 py-3 text-base font-bold text-white bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] rounded-[20px] max-md:px-5">
            Buy Challenge
          </button>
        </div>
      </div>

      <div className="w-full max-md:mt-4">
        <div className="rounded-lg p-4">
          <div className="flex justify-between mb-4 font-bold">
            <span className="w-1/4"></span>
            <span className="w-1/4 text-center">Step 1</span>
            {selectedStep === "Two Step" && (
              <span className="w-1/4 text-center">Step 2</span>
            )}
            <span className="w-1/4 text-center">Funded Account</span>
          </div>
          <RuleRow
            label="Profit Target"
            values={challengeRules[selectedStep].profitTarget}
          />
          <RuleRow
            label="Minimum Trading Days"
            values={challengeRules[selectedStep].minTradingDays}
          />
          <RuleRow
            label="Daily Drawdown"
            values={challengeRules[selectedStep].dailyDrawdown}
          />
          <RuleRow
            label="Overall Drawdown"
            values={challengeRules[selectedStep].overallDrawdown}
          />
          <RuleRow
            label="Trading Period"
            values={challengeRules[selectedStep].tradingPeriod}
          />
          <RuleRow
            label="First Withdrawal"
            values={challengeRules[selectedStep].firstWithdrawal}
          />
          <RuleRow
            label="Profit Split"
            values={challengeRules[selectedStep].profitSplit}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountSize;
