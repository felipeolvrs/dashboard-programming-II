import { authService } from "./AuthService";

const API_URL = "https://api-node-test-6c4b0a5d4c87.herokuapp.com/products";

export const ProductService = {
  
  async getProducts() {
    const token = authService.getToken();
    const res = await fetch(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Erro ao buscar produtos");
    return res.json();
  },

  async createProduct(produto) {
    const token = authService.getToken();
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(produto),
    });

    if (!res.ok) throw new Error("Erro ao criar produto");
    return res.json();
  },

  async deleteProduct(id) {
    const token = authService.getToken();
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Erro ao deletar produto");
  },

  async updateProduct(id, produto) {
    const token = authService.getToken();
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(produto),
    });

    if (!res.ok) throw new Error("Erro ao atualizar produto");
    return res.json();
  },
};
