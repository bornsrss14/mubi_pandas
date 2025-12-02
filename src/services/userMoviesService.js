import axios from "axios";

const API_URL = "http://localhost:3001/api/user-movies";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

const userMoviesService = {
  getAllLiked: async (id_user) => {
    try {
      const response = await api.get(`/liked/${id_user}`);
      console.log(response.data, "checa esto");
      return response.data;
    } catch (error) {
      console.log(error, "(҂◡_◡)");
    }
  },

  getAllWatched: async (id_user) => {
    try {
      const response = await api.get(`/watched/${id_user}`);
      return response.data;
    } catch (error) {
      console.log("Error, found");
    }
  },

  getAllWatchList: async (id_user) => {
    try {
      const response = await api.get(`/to_watch/${id_user}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default userMoviesService;
