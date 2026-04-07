import api from "../api/axios";

//implementar el manejo manual de refresh
const userService = {
  getAllUsers: async () => {
    const response = await api.get("/users");
    return response.data;
  },

  getUserById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  addUser: async (userData) => {
    const response = await api.post("/users", userData);
    return response.data;
  },

  findByUsername: async (username) => {
    const response = await api.post("/users/check-username", { username });
    return response.data;
  },

  findUser: async (username, token) => {
    const response = await api.post(
      "/users/find-username",
      { username },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
  },

  findByEmail: async (email) => {
    const response = await api.post("/users/check-email", { email });
    return response.data;
  },

  updateUSer: async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },

  deleteUser: async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  },
};

export default userService;
