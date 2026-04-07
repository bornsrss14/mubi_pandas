import api from "../api/axios";

// REQUEST INTERCEPTOR
/* api.interceptors.request.use(
  (config) => {
    let auth = null;

    try {
      auth = JSON.parse(localStorage.getItem("auth"));
    } catch {
      auth = null;
    }

    const token = auth?.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config || {};

    if (error?.response?.status === 403 && !prevRequest?.sent) {
      prevRequest.sent = true; //evita el loop infinito

      try {
        const newTokenResponse = await api.get("/refresh", {
          withCredentials: true,
        });
        const newAccessToken = newTokenResponse?.data?.accessToken;
        //actualizo el Token de mi estado, el accessToken  setAccessToken(newAccessToken)
        let currentAuth = null;
        try {
          currentAuth = JSON.parse(localStorage.getItem("auth"));
        } catch {
          currentAuth = null;
        }

        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...currentAuth,
            accessToken: newAccessToken,
          }),
        );

        prevRequest.headers = prevRequest.headers || {};
        prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(prevRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
); */

const authService = {
  authUser: async (username, password_hash, setAccessToken) => {
    try {
      const response = await api.post("/users/auth/login", {
        username,
        password_hash,
      });

      const data = response.data;
      setAccessToken(data.accessToken);

      /* localStorage.setItem(
        "auth",
        JSON.stringify({
          accessToken: data.accessToken,
        }),
      ); */
      return data;
    } catch (error) {
      console.log("Ha ocurrido un error del servidor");
      throw error.response?.data || error.message;
    }
  },

  refreshToken: async () => {
    try {
      const response = await api.get("/users/auth/refresh", {
        withCredentials: true,
      });

      let currentAuth = null;
      try {
        currentAuth = JSON.parse(localStorage.getItem("auth"));
      } catch {
        currentAuth = null;
      }

      localStorage.setItem(
        "auth",
        JSON.stringify({
          ...currentAuth,
          accessToken: response.data.accessToken,
        }),
      );
    } catch (error) {
      console.log("Ha ocurrido un error del servidor");
      throw error.response?.data || error.message;
    }
  },

  logout: async (setAccessToken) => {
    await api.post("/users/auth/logout", {}, { withCredentials: true });
    setAccessToken(null);
    /* localStorage.removeItem("auth"); */
  },
};

export default authService;
