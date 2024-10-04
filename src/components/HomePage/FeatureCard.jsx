import React from "react";

const FeatureCard = ({ icon: Icon, title, bgColor }) => (
  <div
    className={`${bgColor} rounded-lg p-6 flex flex-col items-center justify-center text-white h-48`}
  >
    <Icon size={48} className="mb-4" />
    <h3 className="text-xl font-bold text-center">{title}</h3>
  </div>
);

export default FeatureCard;
