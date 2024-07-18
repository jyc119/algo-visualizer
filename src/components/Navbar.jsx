import React from "react";
import algorithm from "../assets/images/algorithm.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-12 px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img className="h-10 w-auto" src={algorithm} alt="React Jobs" />
            <span className="text-white text-2xl font-bold ml-2">
              Algorithm Visualizer
            </span>
          </div>
          <NavLink
            to="/"
            className="text-white bg-black rounded-md px-3 py-2 hover:bg-red-500"
          >
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
