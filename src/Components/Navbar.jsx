import React from "react";
import navImg from "../assets/more/15.jpg";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./Hooks/useAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();
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
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm btn-ghost">
                  {user?.displayName || "User"}
                </button>
              </li>
              <li>
                <button onClick={logOut} className="btn btn-sm btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline btn-warning">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
