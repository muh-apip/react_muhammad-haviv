import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import useProductStore from "../store/productStore";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../services/productService";
import ImageLogo from "../assets/img/logo.png";

export default function CreateProduct() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    freshness: "",
    price: "",
  });
  const [message, setMessage] = useState("");

  // Fetch Products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      try {
        const updatedProduct = await updateProduct(currentProductId, {
          ProductName: formValues.name,
          ProductCategory: formValues.category,
          ProductFreshness: formValues.freshness,
          ProductPrice: formValues.price,
        });
        setProducts((prev) =>
          prev.map((product) =>
            product.NO === currentProductId
              ? { ...product, ...formValues }
              : product
          )
        );
        setMessage("Product updated successfully!");
        resetForm();
      } catch (error) {
        console.error("Error updating product:", error);
      }
    } else {
      try {
        const newProduct = await addProduct({
          ProductName: formValues.name,
          ProductCategory: formValues.category,
          ProductFreshness: formValues.freshness,
          ProductPrice: formValues.price,
        });
        setProducts([...products, newProduct]);
        setMessage("Product added successfully!");
        resetForm();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }
  };

  // Delete Product
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        setProducts(products.filter((product) => product.NO !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  // Edit Product
  const handleEdit = (product) => {
    setIsEditing(true);
    setCurrentProductId(product.NO);
    setFormValues({
      name: product.ProductName,
      category: product.ProductCategory,
      freshness: product.ProductFreshness,
      price: product.ProductPrice,
    });
  };

  // Reset Form
  const resetForm = () => {
    setFormValues({
      name: "",
      category: "",
      freshness: "",
      price: "",
    });
    setIsEditing(false);
    setCurrentProductId(null);
  };

  const goBack = () => {
    navigate(-1);
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
          <div className="text-center mt-6">
            <button
              onClick={goBack}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Go Back
            </button>
          </div>
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
          {message && (
            <p className="text-green-500 text-center mt-2">{message}</p>
          )}{" "}
          {/* Tampilkan pesan */}
        </div>
      </div>
      {/* List Product Section */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-5xl p-8 rounded-lg">
          <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            List Product
          </h1>

          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left whitespace-nowrap">No</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                  Product Name
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                  Product Category
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                  Product Freshness
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                  Product Price
                </th>
                <th className="px-4 py-2 text-left whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={product.NO} className="border-b">
                    <td className="px-4 py-2 text-center">{product.NO}</td>
                    <td
                      className="px-4 py-2 text-center cursor-pointer"
                      onClick={() => goToDetail(product)}
                    >
                      {product.ProductName}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {product.ProductCategory}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {product.ProductFreshness}
                    </td>
                    <td className="px-4 py-2 text-center">
                      ${product.ProductPrice}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.NO)}
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
