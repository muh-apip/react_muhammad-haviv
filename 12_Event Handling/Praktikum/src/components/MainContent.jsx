import { useState } from "react";
import { addProduct, deleteLastRow, searchProduct } from "../utils/script";

export default function MainContent() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [rowCount, setRowCount] = useState(1000);

  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setProductName("");
    setProductCategory("");
    setProductImage("");
    setProductFreshness("");
    setProductDescription("");
    setProductPrice("");
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!productName || productName.length > 25) {
      newErrors.productName = "Product Name is required and must be less than 25 characters.";
    }

    if (!productCategory) {
      newErrors.productCategory = "Product Category is required.";
    }

    if (!productImage) {
      newErrors.productImage = "Product Image is required.";
    }

    if (!productDescription) {
      newErrors.productDescription = "Product Description is required.";
    }

    if (!productPrice || isNaN(productPrice) || productPrice <= 0) {
      newErrors.productPrice = "Product Price must be a positive number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddProduct = () => {
    if (!validateForm()) {
      return;
    }

    const productData = {
      productName,
      productCategory,
      productImage,
      productFreshness,
      productDescription,
      productPrice,
    };

    const updatedProducts = addProduct(products, productData, rowCount, resetForm);

    if (updatedProducts !== products) {
      setProducts(updatedProducts);
      setRowCount(rowCount + 1);
    }
  };

  const handleDeleteLastRow = () => {
    const updatedProducts = deleteLastRow(products, setRowCount);
    if (updatedProducts !== products) {
      setProducts(updatedProducts);
    }
  };

  const handleSearchProduct = (searchValue) => {
    searchProduct(products, searchValue);
  };

  return (
    <>
      <div className="container mx-auto max-w-3xl p-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Detail Product</h2>
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
              className={`mt-2 w-full p-2 border ${errors.productName ? "border-red-500" : "border-gray-300"} rounded-lg`}
            />
            {errors.productName && <p className="text-red-500 mt-2">{errors.productName}</p>}

            <div>
              <label htmlFor="productCategory" className="block text-gray-700">
                Product Category:
              </label>
              <select
                id="productCategory"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className={`mt-2 w-full p-2 border ${errors.productCategory ? "border-red-500" : "border-gray-300"} rounded-lg`}
              >
                <option value="">Choose...</option>
                <option value="ipsum">ipsum</option>
              </select>
              {errors.productCategory && <p className="text-red-500 mt-2">{errors.productCategory}</p>}
            </div>

            <div>
              <label htmlFor="productImage" className="block text-gray-700">
                Image of Product:
              </label>
              <input
                type="text"
                id="productImage"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
                className={`mt-2 w-full p-2 border ${errors.productImage ? "border-red-500" : "border-gray-300"} rounded-lg`}
              />
              {errors.productImage && <p className="text-red-500 mt-2">{errors.productImage}</p>}
            </div>

            <div>
              <label htmlFor="productDescription" className="block text-gray-700">
                Additional Description:
              </label>
              <textarea
                id="productDescription"
                rows={5}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className={`mt-2 w-full p-2 border ${errors.productDescription ? "border-red-500" : "border-gray-300"} rounded-lg`}
              />
              {errors.productDescription && <p className="text-red-500 mt-2">{errors.productDescription}</p>}
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
                className={`mt-2 w-full p-2 border ${errors.productPrice ? "border-red-500" : "border-gray-300"} rounded-lg`}
              />
              {errors.productPrice && <p className="text-red-500 mt-2">{errors.productPrice}</p>}
            </div>

            <button
              onClick={handleAddProduct}
              className="bg-blue-600 hover:bg-blue-700 transition-colors w-full text-white px-4 py-2 rounded-md mt-4"
            >
              Add Product
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
              <th className="px-4 py-2 text-left">Image of Product</th>
              <th className="px-4 py-2 text-left">Product Freshness</th>
              <th className="px-4 py-2 text-left">Additional Description</th>
              <th className="px-4 py-2 text-left">Product Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.rowNumber} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{product.productName}</td>
                <td className="px-4 py-2">{product.productCategory}</td>
                <td className="px-4 py-2">{product.productImage}</td>
                <td className="px-4 py-2">{product.productFreshness}</td>
                <td className="px-4 py-2">{product.productDescription}</td>
                <td className="px-4 py-2">${product.productPrice}</td>
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
          onClick={() => handleSearchProduct(document.getElementById("searchInput").value)}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-md"
        />
      </div>
    </>
  );
}
