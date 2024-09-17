import React from "react";
import aboutBg from "../assets/more/10.png";

const About = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <h1 className="text-4xl font-bold text-black">About</h1>
    </div>
  );
};

export default About;
