import React from "react";
import aboutUsImage from "../assets/img/AboutUs.png"; 
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center">
          <img src={aboutUsImage} alt="About Us" className="w-3/4 mb-6 md:mb-0 shadow-lg" />
        </div>

        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to our website! We are dedicated to providing the best services to our customers. Our team is
            comprised of experts in their respective fields, and we work tirelessly to ensure that your experience
            with us is nothing short of exceptional.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
