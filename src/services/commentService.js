import api from "../api/axios";

const commentService = {
  addComment: async (commentData) => {
    try {
      const response = await api.post("/user/reviews/comments", commentData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getByReviewId: async (id_review, page = 1, limit = 3) => {
    try {
      const response = await api.get(
        `/user/reviews/comments/details/${id_review}`,
        {
          params: { page, limit },
        },
      );
      return response.data;
    } catch (error) {
      throw error.response.data || error.message;
    }
  },

  getReplies: async (id_comment) => {
    //tengo que hacerlo
    try {
      const response = await api.get(
        `/user/reviews/comments/details/${id_comment}/replies`,
      );
      return response.data;
    } catch (error) {
      throw error.response.data || error.message;
    }
  },

  delete: async (id) => {
    //delete by own id
    try {
      const response = await api.delete("/user/reviews/comments/delete", id);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default commentService;
