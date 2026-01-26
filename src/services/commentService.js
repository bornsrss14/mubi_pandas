import axios from "axios";

const API_URL = "http://localhost:3001/api/user/reviews/comments";
const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

const commentService = {
  addComment: async (commentData) => {
    try {
      const response = await api.post("/", commentData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getByReviewId: async (id_review, page = 1, limit = 3) => {
    try {
      const response = await api.get(`/details/${id_review}`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      throw error.response.data || error.message;
    }
  },

  getReplies: async (id_comment) => {
    //tengo que hacerlo
    try {
      const response = await api.get(`/details/${id_comment}/replies`);
      return response.data;
    } catch (error) {
      throw error.response.data || error.message;
    }
  },

  delete: async (id) => {
    //delete by own id
    try {
      const response = await api.delete("/delete", id);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default commentService;
