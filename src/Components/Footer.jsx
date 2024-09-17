import React from "react";
import footerImg from "../assets/more/15.jpg";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center py-4"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="text-white text-center">
        Copyright Espresso Emporium ! All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
