import React, { useState } from "react";
import ImageLogo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  
  // State for form input
  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    freshness: "",
    price: "",
    image: null,
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    category: "",
    freshness: "",
    price: "",
    image: "",
  });
  const [products, setProducts] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const goBack = () => {
    navigate(-1);
  };

  const validate = () => {
    let errors = {};
    // Validation logic
    if (!/^[A-Za-z\s]{6,50}$/.test(formValues.name)) {
      errors.name = "Product Name must be between 6-50 letters and spaces only";
    }
    if (!formValues.category) {
      errors.category = "Please select a product category";
    }
    if (!formValues.freshness) {
      errors.freshness = "Please select the product freshness";
    }
    if (!/^[0-9]+$/.test(formValues.price) || formValues.price < 1) {
      errors.price = "Product Price must be a valid number and at least $1";
    }
    if (!formValues.image) {
      errors.image = "Please upload a product image";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormValues({
        ...formValues,
        image: file,
      });
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setProducts([
        ...products,
        {
          name: formValues.name,
          category: formValues.category,
          freshness: formValues.freshness,
          price: formValues.price,
          image: imagePreview,
        },
      ]);
      setFormValues({
        name: "",
        category: "",
        freshness: "",
        price: "",
        image: null,
      });
      setImagePreview(null);
      console.log("Form submitted successfully");
    } else {
      console.log("Form validation failed");
    }
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
      {/* Form Section */}
      <div className="container mx-auto mt-10 max-w-3xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-6">
            <img className="h-12" src={ImageLogo} alt="logo tailwind" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-800">Create Product</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Detail Product</h2>
        <form id="productForm" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-4">
            {/* Product Name */}
            <div>
              <label htmlFor="product-name" className="block text-gray-700">
                Product Name:
              </label>
              <input
                type="text"
                id="product-name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
              {formErrors.name && (
                <span className="text-red-500">{formErrors.name}</span>
              )}
            </div>

            {/* Product Category */}
            <div>
              <label htmlFor="product-category" className="block text-gray-700">
                Product Category:
              </label>
              <select
                id="product-category"
                name="category"
                value={formValues.category}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              >
                <option value="">Choose...</option>
                <option value="Food">Food</option>
                <option value="Clothing ">Clothing</option>
                <option value="Electronics  ">Electronics</option>
              </select>
              {formErrors.category && (
                <span className="text-red-500">{formErrors.category}</span>
              )}
            </div>

            {/* Product Image */}
            <div>
              <label htmlFor="productImage" className="block text-gray-700">
                Image of Product:
              </label>
              <input
                type="file"
                id="productImage"
                name="image"
                onChange={handleImageChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
              {formErrors.image && (
                <span className="text-red-500">{formErrors.image}</span>
              )}
            </div>

            {/* Product Freshness */}
            <div>
              <label className="block text-gray-700">Product Freshness:</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="freshness"
                    value="Brand New"
                    onChange={handleInputChange}
                    className="text-blue-500"
                  />
                  <span className="ml-2">Brand New</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="freshness"
                    value="Second Hand"
                    onChange={handleInputChange}
                    className="text-blue-500"
                  />
                  <span className="ml-2">Second Hand</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="freshness"
                    value="Refurbished"
                    onChange={handleInputChange}
                    className="text-blue-500"
                  />
                  <span className="ml-2">Refurbished</span>
                </label>
              </div>
              {formErrors.freshness && (
                <span className="text-red-500">{formErrors.freshness}</span>
              )}
            </div>

            {/* Product Price */}
            <div>
              <label htmlFor="price" className="block text-gray-700">
                Product Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formValues.price}
                onChange={handleInputChange}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
              {formErrors.price && (
                <span className="text-red-500">{formErrors.price}</span>
              )}
            </div>
          </div>

          <div className="text-center mt-8">
            <input
              type="submit"
              value="Submit"
              className="w-full p-2 border bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            />
          </div>
        </form>
      </div>

      {/* List Product */}
      <div>
        <div className="text-center mb-6 mt-8">
          <h1 className="text-2xl font-semibold text-gray-800">List Product</h1>
        </div>
        <div className="p-4">
          <table className="table-auto shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-4 text-left">No</th>
                <th className="px-4 py-4 text-left">Product Name</th>
                <th className="px-4 py-4 text-left">Product Category</th>
                <th className="px-4 py-4 text-left">Image of Product</th>
                <th className="px-4 py-4 text-left">Product Freshness</th>
                <th className="px-4 py-4 text-left">Product Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="px-4 py-4">{index + 1001}</td>
                  <td className="px-4 py-4">{product.name}</td>
                  <td className="px-4 py-4">{product.category}</td>
                  <td className="px-4 py-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-4">{product.freshness}</td>
                  <td className="px-4 py-4">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
