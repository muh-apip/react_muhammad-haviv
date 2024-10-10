import React, { useState } from 'react';

export default function RandomNumber() {
  const [number, setNumber] = useState(0);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
    console.log('Angka Acak: ', randomNum); 
  };

  return (
    <div className="flex flex-col items-center justify-center">
    <h1 className="mb-4">Angka Acak: {number}</h1>
    <button
      onClick={generateRandomNumber}
      className="px-3 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
    >
      Generate Angka Acak
    </button>
  </div>
  );
}
