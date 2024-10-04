import React from "react";
import {
  Calendar,
  Beaker,
  Clock,
  Shield,
  RefreshCw,
  DollarSign,
  MessageCircle,
  FileText,
} from "lucide-react";
// import FeatureGrid from "./FeatureGrid"; // Assuming FeatureGrid is imported

const FeatureGrid = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {" "}
      {/* Adjust gap for spacing */}
      {features.map((feature, index) => (
        <div
          key={index}
          className={`rounded-[30px] p-6 flex flex-col items-center text-center ${feature.bgColor}`}
        >
          <feature.icon className="w-12 h-12 mb-4 text-white" />
          <h3 className="text-[24px] font-bold text-white">{feature.title}</h3>
        </div>
      ))}
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: Calendar,
      title: "Unlimited Trading Days",
      bgColor: "bg-blue-500",
    },
    {
      icon: Beaker,
      title: "Expert Advisor(EA) Allowed",
      bgColor: "bg-green-500",
    },
    {
      icon: Clock,
      title: "Hold Trades Over The Weekend",
      bgColor: "bg-orange-500",
    },
    {
      icon: Shield,
      title: "No Restriction On Trading Style",
      bgColor: "bg-teal-500",
    },
    { icon: RefreshCw, title: "Unlimited Retries", bgColor: "bg-purple-500" },
    {
      icon: DollarSign,
      title: "Best Price In The Market",
      bgColor: "bg-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "24/5 Customer Support",
      bgColor: "bg-red-500",
    },
    {
      icon: FileText,
      title: "Best Trading Conditions",
      bgColor: "bg-pink-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="font-bold text-center mb-8 text-[60px] bg-clip-text bg-[linear-gradient(90deg,#88B92F_0%,#109523_100%)] text-transparent">
        Why Choose Us
      </h2>
      <div className="rounded-md">
        <FeatureGrid features={features} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
