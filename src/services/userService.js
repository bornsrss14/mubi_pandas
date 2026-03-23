import axios from "axios";

const API_URL = "http://localhost:3001/api/users"; // en mi server.js debe ser algo como users

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//implementar el manejo manual de refresh
const userService = {
  getAllUsers: async () => {
    try {
      const response = await api.get("/");
      return response.data;
    } catch (error) {
      //si el token ya expiró
      if (error.response?.status === 403) {
        try {
          //voy a tratar de refrescar el token
          const refreshResponse = await api.get("/refresh", {
            withCredentials: true,
          });

          const newToken = refreshResponse.data.accessToken;
          //Guardo el nuevo token
          localStorage.setItem("token", newToken);
          //Repetir request del origen
          const retryResponse = await api.get("/", {
            headers: { Authorization: `Bearer ${newToken}` },
          });

          return retryResponse.data;
        } catch (refreshError) {
          throw refreshError.response?.data || refreshError.message;
        }
      }
      throw error.response?.data || error.message;
    }
  },
  /*obtener usuario por ID */
  getUserById: async (id) => {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  /*Add new user*/
  addUser: async (userData) => {
    try {
      const response = await api.post("/", userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  findByUsername: async (username) => {
    try {
      const response = await api.post("/check-username", { username });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  findByEmail: async (email) => {
    try {
      const response = await api.post("/check-email", { email });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  //update existing user user
  updateUSer: async (id, userData) => {
    try {
      const response = await api.put(`/${id}`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  //delete user
  deleteUser: async (id) => {
    try {
      const response = await api.delete(`/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default userService;
