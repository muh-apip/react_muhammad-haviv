import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const navigate = useNavigate();
  const [inputUser, setInputUser] = useState("");
  const [response, setResponse] = useState("default response");

  // Ambil API key dari variabel lingkungan
  const apiKey = import.meta.env.VITE_API_KEY; // Sesuaikan dengan cara penyimpanan API key Anda

  // Inisialisasi Google Generative AI dengan API key
  const genAI = new GoogleGenerativeAI(apiKey);

  // Dapatkan model yang akan digunakan (gemini)
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });

  // Konfigurasi opsi pemrosesan AI
  const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 1, // Kreativitas dari AI
  };

  // Fungsi untuk menangani perubahan input
  function handleChange(e) {
    console.log("handle change");
    setInputUser(e.target.value);
  }

  // Fungsi untuk mengirim prompt ke AI Gemini
  async function handlePromptSubmit() {
    console.log("input user = ", inputUser);
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(inputUser);
      setResponse(result.response.text());
    } catch (error) {
      console.error(error);
    }
  }

  const goToCreateProduct = () => {
    navigate("/createproduct");
  };

  const goToHome = () => {
    navigate("/landingpage")
  }

  return (
    <>
      <nav className="bg-white shadow-lg p-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Simple header</h1>
            <div className="flex space-x-4">
              <a
                onClick={goToHome}
                className="py-5 px-3 hover:bg-blue-500 hover:text-white rounded"
              >
                Home
              </a>
              <a
                onClick={goToCreateProduct}
                className="py-5 px-3 cursor-pointer text-gray-700 hover:bg-blue-500 hover:text-white rounded"
              >
                Create Product
              </a>
              <a className="py-5 px-3 cursor-pointer bg-blue-500 hover:bg-blue-500 text-white rounded">
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="mb-6">Chat Gemini AI</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-full max-w-xs"
          value={inputUser}
          onChange={handleChange} 
        />
        <button
          onClick={handlePromptSubmit}
          className="btn mt-6 mb-6 shadow-lg"
        >
          Kirim
        </button>
        {/* Tampilkan response dari AI */}
        <div className="w-full max-w-lg space-y-4">
          <div className="chat chat-start">
            <div className="chat-bubble bg-blue-500">{response}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
