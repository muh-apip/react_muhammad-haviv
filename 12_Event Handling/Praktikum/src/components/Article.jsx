import React from 'react';

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

const Article = () =>{
  return (
    <>
    <div className="container mx-auto mt-10 max-w-3xl p-8">
    <div className="flex justify-center items-center mb-6">
          <img className="h-12" src={logo} alt="logo tailwind" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        {article.title.en}
        </h1>
      <p>{article.description.en}</p>
    </div>
    </>
  );
};

export default Article;
