import React from "react";
import { useNavigate } from "react-router-dom";

export default function AcademyPage() {
  const navigate = useNavigate();
  // const handleClick = () => {
  navigate("/AcademyPage");
  // };
  return <div>AcademyPage</div>;
}
