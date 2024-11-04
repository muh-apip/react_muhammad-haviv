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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Chat Gemini AI</h1>
        
        <input
          type="text"
          placeholder="Masukkan pertanyaan Anda di sini..."
          className="input input-ghost w-full max-w-xl p-4 text-lg border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
          value={inputUser}
          onChange={handleChange} 
        />
        
        <button
          onClick={handlePromptSubmit}
          className="mt-6 mb-6 px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Kirim
        </button>
        
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg text-gray-800 text-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Respons:</h2>
          <p className="whitespace-pre-line">{response}</p>
        </div>
      </div>
    </>
  );
}

export default App;
