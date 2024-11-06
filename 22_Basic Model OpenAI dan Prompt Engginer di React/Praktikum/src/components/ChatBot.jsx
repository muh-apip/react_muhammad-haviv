import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const navigate = useNavigate();
  const [inputUser, setInputUser] = useState("");
  const [response, setResponse] = useState("");
  const [messages, setMessages] = useState([]);
  
  // Ambil API key dari variabel lingkungan
  const apiKey = import.meta.env.VITE_API_KEY;

  // Inisialisasi Google Generative AI dengan API key
  const genAI = new GoogleGenerativeAI(apiKey);

  // Dapatkan model yang akan digunakan (gemini)
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });

  // Konfigurasi opsi pemrosesan AI
  const generationConfig = {
    maxOutputTokens: 100,
    temperature: 1,
  };

  // Tema prompt untuk aktivitas
  const basePrompt = "Halo saya Haviv, berikan saya rekomendasi aktivitas yang bisa saya lakukan hari ini berdasarkan hobi.berikan saya beberapa rekomendasi dari aktivitas tersebut:";

  function handleChange(e) {
    setInputUser(e.target.value);
  }

  // Fungsi untuk mengirim prompt ke AI Gemini
  async function handlePromptSubmit() {
    const userPrompt = `${basePrompt}${inputUser}`;
    const newMessages = [...messages, { sender: "user", text: inputUser }];
    setMessages(newMessages);
    
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(userPrompt);
      const aiResponse = result.response.text();
      setMessages([...newMessages, { sender: "ai", text: aiResponse }]);
      setResponse(aiResponse);
      setInputUser(""); // Clear input after submission
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { sender: "ai", text: "Maaf, terjadi kesalahan. Coba lagi nanti." }]);
    }
  }

  const goToCreateProduct = () => {
    navigate("/createproduct");
  };

  const goToHome = () => {
    navigate("/landingpage");
  };

  return (
    <>
      <nav className="bg-white shadow-lg p-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Simple header</h1>
            <div className="flex space-x-4">
              <a onClick={goToHome} className="py-5 px-3 hover:bg-blue-500 hover:text-white rounded">
                Home
              </a>
              <a onClick={goToCreateProduct} className="py-5 px-3 cursor-pointer text-gray-700 hover:bg-blue-500 hover:text-white rounded">
                Create Product
              </a>
              <a className="py-5 px-3 cursor-pointer bg-blue-500 hover:bg-blue-500 text-white rounded">
                Aktivitas Chat Bot AI
              </a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
                FAQs
              </a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Aktivitas Chat with Gemini AI</h1>

        {/* Chat Display */}
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg text-gray-800 text-lg space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs p-4 rounded-lg shadow-md ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="mt-6 w-full max-w-xl">
          <input
            type="text"
            placeholder="Masukkan kondisi atau kriteria aktivitas di sini..."
            className="input input-ghost w-full p-4 text-lg border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
            value={inputUser}
            onChange={handleChange} 
          />
          
          <button
            onClick={handlePromptSubmit}
            className="mt-4 mb-6 px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300 w-full"
          >
            Kirim
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
