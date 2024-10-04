import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureGrid = ({ features }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {features.map((feature, index) => (
      <FeatureCard key={index} {...feature} />
    ))}
  </div>
);

export default FeatureGrid;
