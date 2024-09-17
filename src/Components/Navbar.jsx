import React from "react";
import navImg from "../assets/more/15.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="bg-cover bg-center py-4"
      style={{ backgroundImage: `url(${navImg})` }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Espresso Emporium</div>

        <ul className="flex space-x-6 text-white text-center">
          <li>
            <NavLink to="/" className="hover:text-gray-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-gray-400">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="hover:text-gray-400">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-400">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Login Button */}
        <button className="btn btn-outline btn-warning">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
