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
};

export default commentService;
