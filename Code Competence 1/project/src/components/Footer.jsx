import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logoImage from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-4 mb-2">
            <img src={logoImage} alt="Logo" className="w-12 md:w-16" />
            <h1 className="text-2xl font-bold">WebsiteKu</h1>
          </div>
          <p className="text-sm text-gray-600">Copyright Haviv. All Rights Reserved.</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-sm text-gray-600">Nomor Telepon: +62 812-3456-7890</p>
          <p className="text-sm text-gray-600">Alamat: Jl. Mh.Thamrin No.123, Jakarta, Indonesia</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 transition duration-300"
              >
                <FaFacebookF className="mr-2" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 transition duration-300"
              >
                <FaTwitter className="mr-2" /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 transition duration-300"
              >
                <FaInstagram className="mr-2" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-600">
        <p>Designed by Haviv</p>
      </div>
    </footer>
  );
};

export default Footer;
