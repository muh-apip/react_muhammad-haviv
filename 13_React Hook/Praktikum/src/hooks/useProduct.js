import { useState } from "react";
import { addProduct, deleteLastRow, searchProduct } from "../utils/script";

export const useProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [rowCount, setRowCount] = useState(1000);
  const [errors, setErrors] = useState({});
  const [editingProduct, setEditingProduct] = useState(null);

  const resetForm = () => {
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
    setErrors({});
    setEditingProduct(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!productName || productName.length > 25) {
      newErrors.productName =
        "Product Name is required and must be less than 25 characters.";
    }

    if (!productCategory) {
      newErrors.productCategory = "Product Category is required.";
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
      productFreshness,
      productPrice,
      rowNumber: rowCount,
    };

    const updatedProducts = editingProduct
      ? products.map((prod) =>
          prod.rowNumber === editingProduct.rowNumber ? productData : prod
        )
      : addProduct(products, productData, rowCount, resetForm);

    if (updatedProducts !== products) {
      setProducts(updatedProducts);
      setRowCount(editingProduct ? rowCount : rowCount + 1);
      resetForm();
    }
  };

  const handleDelete = (rowNumber) => {
    if (window.confirm("Do you want to remove this product?")) {
      const updatedProducts = products.filter(
        (prod) => prod.rowNumber !== rowNumber
      );
      setProducts(updatedProducts);
    }
  };

  const handleEdit = (product) => {
    setProductName(product.productName);
    setProductCategory(product.productCategory);
    setProductFreshness(product.productFreshness);
    setProductPrice(product.productPrice);
    setEditingProduct(product);
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

  return {
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
  };
};
