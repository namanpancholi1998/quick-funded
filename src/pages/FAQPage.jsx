import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Bookmark,
  FileText,
  FolderOpen,
  DollarSign,
  Users,
  TrendingUp,
} from "lucide-react";
import HelpCenter from "../components/FAQPage/HelpCenter";
import HomePage from "../components/FAQPage/HomePage";

const FAQPage = () => {
  // const faqSections = [
  //   {
  //     title: "General rules",
  //     description:
  //       "No matter what type of account you have, whether it's a challenge or a funded account, it's important to...",
  //     icon: <Bookmark className="w-6 h-6" />,
  //     articleCount: 47,
  //     to: "/faq/general-rules",
  //   },
  //   {
  //     title: "Challenge Stage Rules",
  //     description:
  //       "No matter what type of account you have, whether it's a challenge or a funded account, it's important to...",
  //     icon: <Bookmark className="w-6 h-6" />,
  //     articleCount: 47,
  //     to: "/faq/challenge-stage-rules",
  //   },
  //   {
  //     title: "Order & Billing",
  //     icon: <FileText className="w-6 h-6" />,
  //     articleCount: 4,
  //     to: "/faq/order-billing",
  //   },
  //   {
  //     title: "Two Step evaluations",
  //     icon: <FolderOpen className="w-6 h-6" />,
  //     articleCount: 9,
  //     to: "/faq/two-step-evaluations",
  //   },
  //   {
  //     title: "One Step Rules",
  //     description: "Find answers to One Step Rules questions.",
  //     icon: <FolderOpen className="w-6 h-6" />,
  //     to: "/faq/one-step-rules",
  //   },
  //   {
  //     title: "Funded Stage Rules",
  //     description: "Find answers to Funded Stage Rules questions.",
  //     icon: <FolderOpen className="w-6 h-6" />,
  //     to: "/faq/funded-stage-rules",
  //   },
  //   {
  //     title: "Payouts",
  //     description: "Find answers to Payouts questions.",
  //     icon: <DollarSign className="w-6 h-6" />,
  //     to: "/faq/payouts",
  //   },
  //   {
  //     title: "Affiliate & Partnership",
  //     description: "Find answers to Affiliate & Partnership questions.",
  //     icon: <Users className="w-6 h-6" />,
  //     to: "/faq/affiliate-partnership",
  //   },
  //   {
  //     title: "Scaling Plan",
  //     description: "Find answers to Scaling Plan questions.",
  //     icon: <TrendingUp className="w-6 h-6" />,
  //     to: "/faq/scaling-plan",
  //   },
  // ];

  return (
    <div className=" min-h-screen p-6">
      <HelpCenter />
      <HomePage />
      {/* <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <div className="grid gap-4">
            {faqSections.map((section, index) => (
              <NavLink
                key={index}
                to={section.to}
                className={({ isActive }) =>
                  `block p-4 rounded-lg border ${
                    isActive ? "border-indigo-600" : "border-gray-200"
                  } hover:border-indigo-600 transition-colors duration-200`
                }
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-[#96fc02]">
                    {React.cloneElement(section.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{section.title}</h2>
                    {section.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {section.description}
                      </p>
                    )}
                    {section.articleCount && (
                      <p className="text-sm text-gray-500 mt-2">
                        {section.articleCount} articles
                      </p>
                    )}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div> */}
      <Outlet />
    </div>
  );
};

export default FAQPage;
