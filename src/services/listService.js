import axios from "axios";
const API_URL = "http://localhost:3001/api/user/lists/";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

const ListService = {
  addListWithEntries: async (listData) => {
    try {
      const response = await api.post("/", listData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  deleteList: async (id_list) => {
    try {
      const response = await api.delete(`/${id_list}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getAllListWithEntries: async (id_user) => {
    try {
      const lists = await api.get(`/details/${id_user}`);
      return lists.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default ListService;
