import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProductStore from "../store/productStore";
import ImageLogo from "../assets/img/logo.png";

export default function ProductManagement() {
  const navigate = useNavigate();
  const products = useProductStore((state) => state.products);
  const addProduct = useProductStore((state) => state.addProduct);
  const editProduct = useProductStore((state) => state.editProduct);
  const deleteProduct = useProductStore((state) => state.deleteProduct);

  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    freshness: "",
    price: "",
  });

  // Fungsi untuk menangani input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Fungsi untuk menambah atau mengedit produk
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Jika sedang dalam mode edit, panggil fungsi editProduct
      editProduct({
        id: currentProductId,
        productName: formValues.name,
        productCategory: formValues.category,
        productFreshness: formValues.freshness,
        productPrice: formValues.price,
      });
      setIsEditing(false);
    } else {
      // Jika sedang menambah produk, panggil fungsi addProduct
      addProduct({
        id: new Date().toISOString(),
        productName: formValues.name,
        productCategory: formValues.category,
        productFreshness: formValues.freshness,
        productPrice: formValues.price,
      });
    }

    setFormValues({
      name: "",
      category: "",
      freshness: "",
      price: "",
    });
  };

  // Fungsi untuk menghapus produk
  const handleDelete = (id) => {
    deleteProduct(id);
  };

  // Fungsi untuk memulai proses edit
  const handleEdit = (product) => {
    setIsEditing(true);
    setCurrentProductId(product.id);
    setFormValues({
      name: product.productName,
      category: product.productCategory,
      freshness: product.productFreshness,
      price: product.productPrice,
    });
  };

  return (
    <>
      <nav className="bg-white shadow-lg p-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800">Simple header</h1>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="py-5 px-3 bg-blue-500 text-white rounded">
                Home
              </a>
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:bg-blue-500 hover:text-white rounded"
              >
                Features
              </a>
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:bg-blue-500 hover:text-white rounded"
              >
                Pricing
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
      <div className="container mx-auto mt-10 max-w-3xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-6">
            <img className="h-12" src={ImageLogo} alt="logo tailwind" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Create Product
          </h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            perspiciatis culpa a nemo id, harum praesentium, earum nostrum
            incidunt, ut ipsum. Aliquam magnam voluptas quae nobis in, officia
            non necessitatibus.
          </p>
        </div>

        {/* Form Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {isEditing ? "Edit Product" : "Create Product"}
          </h2>
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
                <label className="block text-gray-700">
                  Product Freshness:
                </label>
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
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-500 text-white rounded-lg"
                >
                  {isEditing ? "Update Product" : "Add Product"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* List Product Section */}
        <div>
        <h1 className="text-2xl font-semibold text-gray-800">List Product</h1>
        <div className="p-4">

        </div>
          <table className="min-w-full mt-8 border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">No</th>
                <th className="px-4 py-2 text-left">Product Name</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Freshness</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={product.id} className="border-b">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{product.productName}</td>
                    <td className="px-4 py-2">{product.productCategory}</td>
                    <td className="px-4 py-2">{product.productFreshness}</td>
                    <td className="px-4 py-2">${product.productPrice}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 ml-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
