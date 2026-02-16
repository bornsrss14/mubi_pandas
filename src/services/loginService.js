import axios from "axios";

const API_URL = "http://localhost:3000/auth";
const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, //esto me va a servir para las cookies
});

const loginService = {
  login: async (loginData) => {
    try {
      const response = await api.post("/", loginData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await api.post("/logout");
      return response?.data;
    } catch (error) {
      throw error;
    }
  },

  refreshToken: async () => {
    try {
      const response = await api.get("/refresh");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default loginService;
