import api from "../api/axios";

const fourFavService = {
  getFourFavById: async (id) => {
    try {
      const response = await api.get(`/four/${id}`);
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
      const response = await api.delete(`/four/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  deleteByUserAndMubi: async (id_mubi, id_user) => {
    try {
      const response = await api.delete(`/four/match/${id_mubi}/${id_user}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  addMovie: async (movieData) => {
    try {
      const response = await api.post("/four", movieData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default fourFavService;
