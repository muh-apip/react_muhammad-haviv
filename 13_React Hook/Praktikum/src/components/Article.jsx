import React, { useState } from 'react';
import logo from "../assets/logo.png/";

const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account",
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};

const Article = () => {
  const [language, setLanguage] = useState("en"); 

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "id" : "en"));
  };

  return (
    <>
      <div className="container mx-auto mt-10 max-w-3xl p-8">
        <div className="flex justify-center items-center mb-6">
          <img className="h-12" src={logo} alt="logo tailwind" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          {article.title[language]} 
        </h1>
        <p className='text-center'>{article.description[language]} </p>

        <div className="text-center mt-6">
          <button
            onClick={toggleLanguage}  
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            {language === "en" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Article;
