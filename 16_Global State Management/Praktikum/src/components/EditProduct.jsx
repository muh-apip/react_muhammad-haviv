import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useProductStore from "../store/productStore";

export default function EditProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};

  const editProduct = useProductStore((state) => state.editProduct);

  const [formValues, setFormValues] = useState({
    name: product?.productName || "",
    category: product?.productCategory || "",
    freshness: product?.productFreshness || "",
    price: product?.productPrice || "",
  });

  useEffect(() => {
    if (!product) {
      navigate("/"); // Redirect jika tidak ada produk yang dipilih
    }
  }, [product, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct({
      id: product.id,
      productName: formValues.name,
      productCategory: formValues.category,
      productFreshness: formValues.freshness,
      productPrice: formValues.price,
    });
    navigate("/"); // Kembali ke halaman utama setelah edit
  };

  return (
    <div className="container mx-auto mt-10 max-w-3xl p-8">
      <h1 className="text-3xl font-semibold text-gray-800 text-center">Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-gray-700">Product Name:</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Product Category:</label>
            <select
              name="category"
              value={formValues.category}
              onChange={handleInputChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Choose...</option>
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Product Freshness:</label>
            <div className="mt-2">
              <label>
                <input
                  type="radio"
                  name="freshness"
                  value="Brand New"
                  checked={formValues.freshness === "Brand New"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Brand New
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="freshness"
                  value="Second Hand"
                  checked={formValues.freshness === "Second Hand"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Second Hand
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="freshness"
                  value="Refurbished"
                  checked={formValues.freshness === "Refurbished"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Refurbished
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Product Price:</label>
            <input
              type="number"
              name="price"
              value={formValues.price}
              onChange={handleInputChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="text-center mt-8">
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">
              Update Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
