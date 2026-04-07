import api from "../api/axios";
const ListService = {
  addListWithEntries: async (listData) => {
    try {
      const response = await api.post("/user/lists/", listData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  deleteList: async (id_list) => {
    try {
      const response = await api.delete(`/user/lists/${id_list}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getAllListWithEntries: async (id_user) => {
    try {
      const lists = await api.get(`/user/lists/details/${id_user}`);
      return lists.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default ListService;
