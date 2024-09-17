import React from "react";
import img1 from "../assets/cups/Rectangle 10.png";
import img2 from "../assets/cups/Rectangle 11.png";
import img3 from "../assets/cups/Rectangle 12.png";
import img4 from "../assets/cups/Rectangle 13.png";
import img5 from "../assets/cups/Rectangle 14.png";
import img6 from "../assets/cups/Rectangle 15.png";
import img7 from "../assets/cups/Rectangle 16.png";
import img8 from "../assets/cups/Rectangle 9.png";

const FollowUs = () => {
  return (
    <div className="text-center py-20 text-black bg-[#ECEAE3]">
      <h2 className="text-lg font-semibold mb-2">Follow Us Now</h2>
      <h1 className="text-3xl font-bold mb-6">Follow on Instagram</h1>

      <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={img1}
            alt="Coffee 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={img2}
            alt="Coffee 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={img3}
            alt="Coffee 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={img4}
            alt="Coffee 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={img5}
            alt="Coffee 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={img6}
            alt="Coffee 6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={img7}
            alt="Coffee 7"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={img8}
            alt="Coffee 8"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
