import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeImage from '../assets/img/Home.png';

const Home = () => {
  return (
    <>
      <Header />
      <div className="h-screen flex flex-col">
        <main
          className="flex-grow flex items-center justify-center h-full"
          style={{
            backgroundImage: `url(${HomeImage})`,
            backgroundSize: 'cover', // Cover the entire area
            backgroundPosition: 'center', // Center the image
          }}
        >
          <div className="text-center p-6 bg-white bg-opacity-80 rounded-lg max-w-lg"> {/* Added background for text readability */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website!</h1>
            <p className="text-lg text-gray-600 mb-6">
              This is a place where you can find more information about our services,
              contact us, and learn more about us. We're excited to have you here!
            </p>
            <a
              href="/about"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
