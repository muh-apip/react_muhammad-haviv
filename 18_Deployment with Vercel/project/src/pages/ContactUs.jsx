import React, { useState } from "react";
import contactUsImage from "../assets/img/ContactUs.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    
    setFormData({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
            <p className="text-gray-700 text-lg mb-6 text-center">
              We would love to hear from you! Please fill out the form on the right, and we'll get back to you as soon as possible. Your feedback is important to us.
            </p>
            <img src={contactUsImage} alt="Contact Us" className="rounded-lg mx-auto w-72- h-72" />
          </div>

          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
              <div className="mb-4 flex space-x-4">
                <div className="w-full">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>

            {submittedData && (
              <div className="mt-8 bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Submitted Data:</h2>
                <p><strong>Username:</strong> {submittedData.username}</p>
                <p><strong>First Name:</strong> {submittedData.firstName}</p>
                <p><strong>Last Name:</strong> {submittedData.lastName}</p>
                <p><strong>Email:</strong> {submittedData.email}</p>
                <p><strong>Message:</strong> {submittedData.message}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;