import React from "react";
import ImageLogo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const products = [
    { id: 1001, name: "Lorem", category: "ipsum", freshness: "Adipiscing", price: 1 },
    { id: 1002, name: "Lorem", category: "ipsum", freshness: "Adipiscing", price: 10 },
    { id: 1003, name: "Lorem", category: "ipsum", freshness: "Adipiscing", price: 20 },
    { id: 1004, name: "Lorem", category: "ipsum", freshness: "Adipiscing", price: 9 },
  ];

  const goToDetail = (product) => {
    navigate('/product-detail', { state: { product } }); 
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
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Detail Product
        </h2>
        <form id="productForm" action="#" method="post" noValidate="">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="product-name" className="block text-gray-700">
                Product Name:
              </label>
              <input
                type="text"
                id="product-name"
                name="name"
                required=""
                minLength={6}
                maxLength={50}
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="product-category" className="block text-gray-700">
                Product Category:
              </label>
              <select
                id="product-category"
                name="category"
                required=""
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              >
                <option value="">Choose...</option>
                <option value="Food">Food</option>
                <option value="Drink">Drink</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Product Freshness:</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="product-freshness"
                    defaultValue="brand new"
                    className="text-blue-500"
                    required=""
                  />
                  <span className="ml-2">Brand New</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="product-freshness"
                    defaultValue="second hand"
                    className="text-blue-500"
                  />
                  <span className="ml-2">Second Hand</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="product-freshness"
                    defaultValue="refurbished"
                    className="text-blue-500"
                  />
                  <span className="ml-2">Refurbished</span>
                </label>
              </div>
            </div>
          
            <div>
              <label htmlFor="price" className="block text-gray-700">
                Product Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                min={1}
                required=""
                placeholder="$1"
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <input
              type="submit"
              defaultValue="Submit"
              className="w-full p-2 border bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            />
          </div>
        </form>
      </div>
      <div
        id="errorModal"
        className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center hidden"
      >
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold">Error</h2>
          <p id="errorMessage" className="mt-2 text-red-600" />
          <div className="mt-4">
            <button
              id="closeModal"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center mb-6 mt-8">
          <h1 className="text-2xl font-semibold text-gray-800">List Product</h1>
        </div>
        <div className="p-4">
        <table className="table-auto shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">No</th>
                <th className="px-4 py-2 text-left">Product Name</th>
                <th className="px-4 py-2 text-left">Product Category</th>
                <th className="px-4 py-2 text-left">Product Freshness</th>
                <th className="px-4 py-2 text-left">Product Price</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className="even:bg-gray-200 cursor-pointer" onClick={() => goToDetail(product)}>
                  <td className="px-4 py-4">{index + 1}</td>
                  <td className="px-4 py-4">{product.name}</td>
                  <td className="px-4 py-4">{product.category}</td>
                  <td className="px-4 py-4">{product.freshness}</td>
                  <td className="px-4 py-4">${product.price}</td>
                  <td className="px-4 py-2">
                    <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 ml-2">
                      Delete
                    </button>
                    <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-blue-700">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mb-2 mt-2">
            <input
              type="text"
              placeholder="Search by Product Name"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <input
              type="button"
              defaultValue="Deletion"
              className="bg-blue-600 text-white px-4 py-2 rounded-l-md"
            />
            <input
              type="button"
              defaultValue="Search"
              className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-r-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}
