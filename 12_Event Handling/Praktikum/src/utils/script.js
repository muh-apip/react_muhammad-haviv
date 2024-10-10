export const addProduct = (products, productData, rowCount, resetForm) => {
  const newProduct = { ...productData, rowNumber: rowCount };
  const updatedProducts = [...products, newProduct];
  resetForm();  // Reset form after adding product
  return updatedProducts;
};

export const deleteLastRow = (products, setRowCount) => {
  if (products.length === 0) {
    alert("No products to delete.");
    return products;
  }
  const updatedProducts = products.slice(0, -1);
  setRowCount(prevCount => prevCount - 1);  // Decrease row count
  return updatedProducts;
};

export const searchProduct = (products, searchValue) => {
  const foundProduct = products.find(
    product => product.productName.toLowerCase() === searchValue.toLowerCase()
  );

  if (foundProduct) {
    alert(`Product found: ${foundProduct.productName}`);
  } else {
    alert("Product not found.");
  }
};
