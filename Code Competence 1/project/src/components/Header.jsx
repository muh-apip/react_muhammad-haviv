import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/img/logo.png";

const Header = () => {
  return (
    <header className="bg-white text-gray-800">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <img src={logoImage} alt="Logo" className="w-16 md:w-20" />
          <h1 className="text-xl md:text-2xl font-bold">WebsiteKu</h1>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
