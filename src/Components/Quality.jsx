import React from "react";
import img1 from "../assets/icons/1.png";
import img2 from "../assets/icons/2.png";
import img3 from "../assets/icons/3.png";
import img4 from "../assets/icons/4.png";

const Quality = () => {
  return (
    <section className="bg-[#ECEAE3] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="">
            <div className="text-4xl mb-4">
              <img src={img1} alt="" />
            </div>
            <h2 className="text-xl font-semibold text-[#331A15]">
              Awesome Aroma
            </h2>
            <p className="text-[#1B1A1A]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="">
            <div className="text-4xl mb-4">
              <img src={img2} alt="" />
            </div>
            <h2 className="text-xl font-semibold text-[#331A15]">
              High Quality
            </h2>
            <p className="text-[#1B1A1A]">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="">
            <div className="text-4xl mb-4">
              <img src={img3} alt="" />
            </div>
            <h2 className="text-xl font-semibold text-[#331A15]">
              Pure Grades
            </h2>
            <p className="text-[#1B1A1A]">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="">
            <div className="text-4xl mb-4">
              <img src={img4} alt="" />
            </div>
            <h2 className="text-xl font-semibold text-[#331A15]">
              Proper Roasting
            </h2>
            <p className="text-[#1B1A1A]">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
