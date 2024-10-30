// src/services/productService.js
import axios from 'axios';

const apiURL = 'https://671fa4bee7a5792f052f0742.mockapi.io/Product';

const getProducts = async () => {
  const response = await axios.get(apiURL);
  return response.data;
};

const addProduct = async (product) => {
  const response = await axios.post(apiURL, product);
  return response.data;
};

const updateProduct = async (id, product) => {
  const response = await axios.put(`${apiURL}/${id}`, product);
  return response.data;
};

const deleteProduct = async (id) => {
  await axios.delete(`${apiURL}/${id}`);
};

export { getProducts, addProduct, updateProduct, deleteProduct };
