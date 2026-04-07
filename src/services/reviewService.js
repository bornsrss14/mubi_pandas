import api from "../api/axios";

const reviewService = {
  createOrUpdate: async (reviewData) => {
    try {
      const response = await api.post("/user/reviews", reviewData);
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
      const response = await api.delete("/user/reviews", id_user, id_tmdb);
      return response.data;
    } catch (error) {}
  },
  //get all  the reviews made by X id_user
  getByUser: async (id_user) => {
    try {
      const response = await api.get(`/user/reviews/${id_user}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getByMubi: async (id_tmdb, page = 1, limit = 3) => {
    try {
      const response = await api.get(`/user/reviews/movie/search/${id_tmdb}`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getMainReview: async (id_tmdb, id) => {
    try {
      const response = await api.get(`/user/reviews/details/${id_tmdb}/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default reviewService;
