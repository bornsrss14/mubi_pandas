import api from "../api/axios";

const userMoviesService = {
  getAllLiked: async (id_user) => {
    try {
      const response = await api.get(`/user-movies/liked/${id_user}`);
      console.log(response.data, "checa esto");
      return response.data;
    } catch (error) {
      console.log(error, "(҂◡_◡)");
    }
  },

  getAllWatched: async (id_user) => {
    try {
      const response = await api.get(`/user-movies/watched/${id_user}`);
      return response.data;
    } catch (error) {
      console.log("Error, found");
    }
  },

  getAllWatchList: async (id_user) => {
    try {
      const response = await api.get(`/user-movies/to_watch/${id_user}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default userMoviesService;
