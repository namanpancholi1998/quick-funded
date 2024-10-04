import React from "react";
// import { Search } from "lucide-react";
import SearchBar from "./SearchBar";
import GeneralQnsList from "./GeneralQuestion/GenerealQnsList";
import ChallengeStageQns from "./ChallengeStageRules/ChallengeStageQns";

const HelpCenter = () => {
  const articles = [...GeneralQnsList, ...ChallengeStageQns].map((item) => ({
    title: item.question,
    content: item.answer,
    link: item.routerLink,
  }));
  return (
    <div className=" py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="flex justify-center text-4xl font-bold mb-4">
          Quick FAQs, How can we help?
        </h1>
        <div className="relative">
          <SearchBar articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
