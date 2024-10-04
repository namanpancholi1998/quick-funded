import React from "react";
import { NavLink } from "react-router-dom";
import HeroSection from "../components/HomePage/HeroSection";
import JoinCommunity from "../components/HomePage/JoinCommunity";
import PerkOfQF from "../components/HomePage/PerkOfQF";
import AccountSize from "../components/HomePage/AccountSize";
import HowItWorks from "../components/HomePage/HowItWorks";
import AccountSizeDesign from "../components/HomePage/AccountSizeDesign";
import MaximizeProfile from "../components/HomePage/MaximizeProfile";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import SuccessStory from "../components/HomePage/SuccessStory";
import QuickFundedDashboard from "../components/HomePage/QuickFundedDashboard";

export default function HomePage() {
  return (
    <div className=" flex flex-col items-center mx-auto">
      <HeroSection />
      <QuickFundedDashboard />
      <PerkOfQF />
      <HowItWorks />
      <AccountSizeDesign />
      <AccountSize />
      <MaximizeProfile />
      <WhyChooseUs />
      <SuccessStory />
      {/* <JoinCommunity /> */}
    </div>
  );
}
