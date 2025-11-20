import axios from "axios";

const API_URL = "http://localhost:3001/api/four";
const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

const fourFavService = {
  getFourFavById: async (id) => {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getAllFourFav: async () => {
    try {
      const response = await api.get("/");
      return response.data;
    } catch (error) {
      throw error.response?.data || error.mesage;
    }
  },

  //delete mubi
  deleteFavFourItem: async (id) => {
    try {
      const response = await api.delete(`/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  deleteByUserAndMubi: async (id_mubi, id_user) => {
    try {
      const response = await api.delete(`/match/${id_mubi}/${id_user}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  addMovie: async (movieData) => {
    try {
      const response = await api.post("/", movieData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default fourFavService;
