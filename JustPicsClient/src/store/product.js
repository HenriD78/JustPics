import {create} from 'zustand'

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({products}),
  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (!data.success) {
        return { success: false, message: data.message || "Failed to load products." };
      }
      set({ products: data.data || [] });
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message || "Server error" };
    }
  },
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return  {success:false, message: "Please fill in all fields."}
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
    const data = await res.json();
    set((state => ({products:[...state.products, data.data]})))
    return  {success:true, message: "Product created successfully."}
  }
}))
