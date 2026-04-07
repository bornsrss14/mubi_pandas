import { useEffect } from "react";

import { useAuthUser } from "../contexts/UserAuthProvider";
import api from "../api/axios";

export const useAxiosInterceptors = () => {
  const { accessToken, setAccessToken } = useAuthUser();
  useEffect(() => {
    //req interceptors
    const requestInterceptor = api.interceptors.request.use((config) => {
      if (accessToken && !config.headers["Authorization"]) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    //res interceptors
    const responseInterceptors = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config || {};
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;

          try {
            const newTokenResponse = await api.get("/refresh", {
              withCredentials: true,
            });
            const newAccessToken = newTokenResponse?.data?.accessToken;
            setAccessToken(newAccessToken); //ya no lo hago en localstorage

            prevRequest.headers = prevRequest.headers || {};
            prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return api(prevRequest);
          } catch (error) {
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      },
    );

    //limpio al desmontar
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptors);
    };
  }, [accessToken]); //cada vez que cambia mi accessToken
};
