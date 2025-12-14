import axios from "axios";

const API_URL = "http://localhost:3001/api/ratings";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

const ratingService = {
  create: async (ratingData) => {
    try {
      const response = await api.post("/", ratingData);
      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          message: error.message || "Network error",
        }
      );
    }
  },

  update: async (id, ratingData) => {
    try {
      const response = await api.put(`/${id}`, ratingData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getByMovie: async (id_tmdb) => {
    try {
      const response = await api.get(`${id_tmdb}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getByUser: async (id_user) => {
    try {
      const response = await api.get(`${id_user}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default ratingService;
