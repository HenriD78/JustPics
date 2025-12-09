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
  },
  updateProduct: async (id, updates) => {
    if (!id) return { success: false, message: "Missing product id" };
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updates)
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message || "Update failed" };
    set((state) => ({
      products: state.products.map((p) =>
        (p._id || p.id) === id ? data.data : p
      ),
    }));
    return { success: true, message: "Product updated." };
  },
  deleteProduct: async (id) => {
    if (!id) return { success: false, message: "Missing product id" };
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE"
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message || "Delete failed" };
    set((state) => ({
      products: state.products.filter((p) => (p._id || p.id) !== id),
    }));
    return { success: true, message: "Product deleted." };
  }
}))
