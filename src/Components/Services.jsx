import React from "react";
import servicesBg from "../assets/more/10.png";
const Services = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${servicesBg})` }}
    >
      <h1 className="text-black text-4xl font-bold">Services</h1>
    </div>
  );
};

export default Services;
