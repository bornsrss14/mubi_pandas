import axios from "axios";

const API_URL = "http://localhost:3001/api/users/auth";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

const authService = {
  authUser: async (username, password_hash) => {
    try {
      const response = await api.post("/login", {
        username,
        password_hash,
      });
      return response.data;
    } catch (error) {
      console.log("un viaje inesperado");
      throw error.response?.data || error.message;
    }
  },
};

export default authService;
