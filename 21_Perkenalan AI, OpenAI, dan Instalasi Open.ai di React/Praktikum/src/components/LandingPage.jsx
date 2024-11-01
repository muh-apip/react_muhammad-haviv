import React from "react";
import ImageHero from "../assets/img/hero-img.png";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const goToCreateProduct = () => {
    navigate("/createproduct");
  };

  const goToChatBot = () => {
    navigate("/chatbot");
  };
  return (
    <>
      {/* Header */}
      <nav className="bg-white shadow-lg p-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800">Simple header</h1>
            </div>
            <div className="flex space-x-4">
              <a href="" className="py-5 px-3 bg-blue-500 hover:bg-blue-500 text-white rounded">
                Home
              </a>
              <a
                onClick={goToCreateProduct}
                className="py-5 px-3 cursor-pointer text-gray-700 hover:bg-blue-500 hover:text-white rounded"
              >
                Create Product
              </a>
              <a
                onClick={goToChatBot}
                className="py-5 px-3 cursor-pointer text-gray-700 hover:bg-blue-500 hover:text-white rounded"
              >
                Chat Bot AI
              </a>
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:bg-blue-500 hover:text-white rounded"
              >
                FAQs
              </a>
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:bg-blue-500 hover:text-white rounded"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero h-screen flex flex-col md:flex-row items-center justify-between bg-customBlue text-white p-32 space-y-10 md:space-y-0">
        <div className="content max-w-lg space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Better Solutions For Your Business
          </h1>
          <p className="text-lg md:text-xl">
            We are a team of talented designers making websites with Bootstrap
          </p>
          <div className="buttons flex justify-center md:justify-start space-x-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full">
              Get Started
            </button>
            <button className="bg-transparent border border-white py-2 px-6 rounded-full hover:bg-white hover:text-blue-900">
              Watch Video
            </button>
          </div>
        </div>
        <div className="image-container flex justify-center">
          <img src={ImageHero} alt="hero image" className="w-full max-w-md" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700">
        <div id="subscription" className="text-center p-12">
          <h3 className="text-2xl text-blue-900 font-semibold mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-gray-600 mb-6">
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <form
            action="CreateProduct.html"
            method="get"
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4"
          >
            <input
              type="email"
              name="subscription"
              required
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 w-full sm:w-auto"
            />
            <button
              onClick={goToCreateProduct}
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
            >
              Go to Create Product
            </button>
          </form>
        </div>

        <div className="footer-container max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 px-2 py-12">
          <div className="footer-section text-center md:text-left">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">ARSHA</h3>
            <p>
              A108 Adam Street, New York, NY 535022, United States
              <br />
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
            </p>
          </div>

          <div className="footer-section text-center md:text-left">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section text-center md:text-left">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section text-center md:text-left">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">
              Our Social Networks
            </h4>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-blue-500 p-2 rounded-full text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="copyright text-center py-6 bg-customBlue text-white flex flex-row p-12 justify-between">
          <p>
            © Copyright <strong>Haviv</strong>. All Rights Reserved
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://bootstrapmade.com"
              className="text-blue-400 hover:underline"
            >
              BootstrapMade
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
