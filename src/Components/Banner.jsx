import React from "react";
import bannerImg from "../assets/more/6.jpeg";

const Banner = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="mb-6 text-lg">
          It’s coffee time – Sip & Savor – Relaxation in every sip! Get the
          nostalgia back! Your companion of every moment!
        </p>
        <button className="btn btn-warning">Learn More</button>
      </div>
    </section>
  );
};

export default Banner;
