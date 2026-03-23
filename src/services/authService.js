import axios from "axios";

const API_URL = "http://localhost:3001/api/users/auth";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
//http://localhost:3001/api/users/auth/login

//agrego interceptos de REQUEST
/* api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;

    if ((error.response?.status === 403) & !prevRequest._retry) {
      prevRequest._retry = true;
      try {
        const response = await api.get("/refres", { withCredentials: true });

        //genero mi muevo token
        const newToken = response.data.accessToken;
        localStorage.setItem("token", newToken);

        //actualizo mi header

        prevRequest.headers.Authorization = `Bearer ${newToken}`;

        return api(prevRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
); */
const authService = {
  authUser: async (username, password_hash) => {
    try {
      const response = await api.post(
        "/login",
        {
          username,
          password_hash,
        },
        { withCredentials: true },
      );
      localStorage.setItem("token", response.data.accessToken);
      //Es la respuesta que me da mi servidor
      /* return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
    }); */

      return response.data;
    } catch (error) {
      console.log("Ha ocurrido un error del servidor");
      throw error.response?.data || error.message;
    }
  },
  /* const res = await api.post(
  "/api/users/auth/login",
  { username, password },
  { withCredentials: true }
);

localStorage.setItem("token", res.data.accessToken); */

  refreshToken: async () => {
    try {
      const response = await api.get("/refresh", { withCredentials: true });
      localStorage.setItem("token", response.data.accessToken);
    } catch (error) {
      console.log("Ha ocurrido un error del servidor");
      throw error.response?.data || error.message;
    }

    /* 
  await api.post(
  "/api/users/auth/logout",
  {},
  { withCredentials: true }
);

localStorage.removeItem("token"); */
  },

  logout: async () => {
    await api.post("/logout", {}, { withCredentials: true });
    localStorage.removeItem("token");
  },
};

export default authService;
