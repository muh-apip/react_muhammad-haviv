import { useState } from "react";
import { addProduct, deleteLastRow, searchProduct } from "../utils/script";
import { useProduct } from "../hooks/useProduct";

export default function MainContent() {
  const {
    productName,
    setProductName,
    productCategory,
    setProductCategory,
    productFreshness,
    setProductFreshness,
    productPrice,
    setProductPrice,
    products,
    errors,
    editingProduct,
    handleAddProduct,
    handleDelete,
    handleEdit,
    handleDeleteLastRow,
    handleSearchProduct,
    resetForm,
  } = useProduct();

  return (
    <>
      <div className="container mx-auto max-w-3xl p-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Detail Product
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4">
            <label htmlFor="productName" className="block text-gray-700">
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className={`mt-2 w-full p-2 border ${
                errors.productName ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
            />
            {errors.productName && (
              <p className="text-red-500 mt-2">{errors.productName}</p>
            )}

            <div>
              <label htmlFor="productCategory" className="block text-gray-700">
                Product Category:
              </label>
              <select
                id="productCategory"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className={`mt-2 w-full p-2 border ${
                  errors.productCategory ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
              >
                <option value="">Choose...</option>
                <option value="ipsum">ipsum</option>
              </select>
              {errors.productCategory && (
                <p className="text-red-500 mt-2">{errors.productCategory}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700">Product Freshness:</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="productFreshness"
                    value="Brand New"
                    onChange={(e) => setProductFreshness(e.target.value)}
                    className="text-blue-500"
                    required
                  />
                  <span className="ml-2">Brand New</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="productFreshness"
                    value="Second Hand"
                    onChange={(e) => setProductFreshness(e.target.value)}
                    className="text-blue-500"
                    required
                  />
                  <span className="ml-2">Second Hand</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="productFreshness"
                    value="Refurbished"
                    onChange={(e) => setProductFreshness(e.target.value)}
                    className="text-blue-500"
                    required
                  />
                  <span className="ml-2">Refurbished</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="productPrice" className="block text-gray-700">
                Product Price:
              </label>
              <input
                type="number"
                id="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className={`mt-2 w-full p-2 border ${
                  errors.productPrice ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
              />
              {errors.productPrice && (
                <p className="text-red-500 mt-2">{errors.productPrice}</p>
              )}
            </div>

            <button
              onClick={handleAddProduct}
              className="bg-blue-600 hover:bg-blue-700 transition-colors w-full text-white px-4 py-2 rounded-md mt-4"
            >
              {editingProduct ? "Update Product" : "Add Product"}
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mb-6 mt-8">
        <h1 className="text-2xl font-semibold text-gray-800">List Product</h1>
      </div>
      <div className="p-4">
        <table id="dataTable" className="table-auto shadow-lg rounded-lg">
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
              <tr key={product.rowNumber} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{product.productName}</td>
                <td className="px-4 py-2">{product.productCategory}</td>
                <td className="px-4 py-2">{product.productFreshness}</td>
                <td className="px-4 py-2">${product.productPrice}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(product.rowNumber)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 ml-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-green-500 text-white py-1 px-3 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4">
        <input
          type="text"
          id="searchInput"
          placeholder="Search by Product Name"
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="p-4">
        <input
          type="button"
          value="Deletion"
          onClick={handleDeleteLastRow}
          className="bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-2 mr-4 rounded-md"
        />
        <input
          type="button"
          value="Search"
          onClick={() =>
            handleSearchProduct(document.getElementById("searchInput").value)
          }
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-md"
        />
      </div>
    </>
  );
}
