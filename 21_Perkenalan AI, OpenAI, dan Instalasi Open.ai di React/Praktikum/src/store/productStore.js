import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],

  // Action untuk menambah produk
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  // Action untuk mengedit produk
  editProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    })),

  // Action untuk menghapus produk
  deleteProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
}));

export default useProductStore;
