// src/components/ui/card.jsx

import React from "react";

export const Card = ({ children, className, ...props }) => (
  <div
    className={`bg-white border rounded-lg shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);
