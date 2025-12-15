import axios from "axios";

const API_URL = "http://localhost:3001/api/users"; // en mi server.js debe ser algo como users

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const userService = {
  getAllUsers: async () => {
    try {
      const response = await api.get("/");
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  /*obtener usuario por ID */
  getUserById: async (id) => {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  /*Add new user*/
  addUser: async (userData) => {
    try {
      const response = await api.post("/", userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  //update existing user user
  updateUSer: async (id, userData) => {
    try {
      const response = await api.put(`/${id}`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  //delete user
  deleteUser: async (id) => {
    try {
      const response = await api.delete(`/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default userService;
