import axios from "axios";
const API_URL = "http://localhost:3001/api/user/reviews";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Contect-Type": "application/json" },
});

const reviewService = {
  createOrUpdate: async (reviewData) => {
    try {
      const response = await api.post("/", reviewData);
      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          message: error.message || "Network error",
        }
      );
    }
  },

  delete: async (id_user, id_tmdb) => {
    try {
      const response = await api.delete("/", id_user, id_tmdb);
      return response.data;
    } catch (error) {}
  },
  //get all  the reviews made by X id_user
  getByUser: async (id_user) => {
    try {
      const response = await api.get(`/${id_user}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getByMubi: async (id_tmdb, page = 1, limit = 3) => {
    try {
      const response = await api.get(`/movie/search/${id_tmdb}`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default reviewService;
