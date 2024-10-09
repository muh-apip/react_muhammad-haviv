export const addProduct = (products, productData, rowCount, resetForm) => {
  const { productName, productCategory, productImage, productFreshness, productDescription, productPrice } = productData;

  if (productName && productCategory && productImage && productFreshness && productDescription && productPrice) {
    const newProduct = {
      rowNumber: rowCount,
      name: productName,
      category: productCategory,
      image: productImage,
      freshness: productFreshness,
      description: productDescription,
      price: productPrice
    };

    const updatedProducts = [...products, newProduct];
    resetForm();
    return updatedProducts;
  } else {
    alert('Please enter a valid value');
    return products;
  }
};

export const deleteLastRow = (products, setRowCount) => {
  if (products.length > 0) {
    const updatedProducts = products.slice(0, -1); 
    setRowCount(prevCount => prevCount - 1);
    return updatedProducts;
  } else {
    alert("No data to delete!");
    return products;
  }
};

export const searchProduct = (products, searchValue) => {
  const foundProduct = products.find(
    (product) => product.name.toLowerCase() === searchValue.toLowerCase()
  );

  if (foundProduct) {
    alert(`Product Found:\nName: ${foundProduct.name}\nCategory: ${foundProduct.category}\nImage: ${foundProduct.image}\nFreshness: ${foundProduct.freshness}\nDescription: ${foundProduct.description}\nPrice: ${foundProduct.price}`);
  } else {
    alert("Product not found!");
  }
};