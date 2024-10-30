import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { product } = location.state || {}; 

  const goBack = () => {
    navigate(-1); 
  };

  if (!product) {
    return <div>Product not found!</div>; // Menampilkan pesan jika tidak ada produk
  }

  return (
    <div className="container mx-auto mt-10 max-w-3xl p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Detail</h2>
      <div>
        <h3 className="font-bold">Product Name: {product.name}</h3>
        <p>Product Category: {product.category}</p>
        <p>Product Freshness: {product.freshness}</p>
        <p>Product Price: ${product.price}</p>
      </div>
      <button onClick={goBack} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md">
        Go Back
      </button>
    </div>
  );
}

export default ProductDetail;
