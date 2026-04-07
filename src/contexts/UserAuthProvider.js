import { createContext, useCallback, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import authService from "../services/authService";
import userService from "../services/userService";
import fourFavService from "../services/fourFavoriteService";
import movieService from "../services/movieDatabaseService";
import ListService from "../services/listService";

const UserContextAuth = createContext();
export const UserAuthProvider = ({ children }) => {
  const [userLog, setUserLog] = useState();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [topFavorites, setTopFavorites] = useState([]);
  const [myLists, setMyLists] = useState([]);
  const [accessToken, setAccessToken] = useState(); //base 64
  const [authUser, setAuthUser] = useState({});

  const loginUserFun = async ({ user, pwd }) => {
    const response = await authService.authUser(user, pwd, setAccessToken);
    //Después del login, guardo mi accessToken
    if (response) {
      //guardar token si lo tengo ----guardo en mi contexto
      setAccessToken(response?.accessToken);
      await funGetUser(response?.accessToken);
    }
    setLoadingAuth(false);
  };

  const funGetUser = async (accessToken) => {
    try {
      if (!accessToken) return; //- - - - - - aborto sino hay token - - - - - - - -

      const decoded = jwtDecode(accessToken);
      const usernameAuth = decoded.userInfo.username;
      const userMain = await userService.findUser(usernameAuth, accessToken);
      //console.log("respuesta userMain:", userMain); success: true, data: object usuario
      setAuthUser(userMain.data); //aquí ya está mi objeto de usuario
    } catch (error) {
      console.log("Error completo:", error);
      console.log("Error response:", error?.response?.data);
      console.log("Error status:", error?.response?.status);
    }
  };

  const logOutFun = async () => {
    await authService.logout(setAccessToken);
    console.log("Se terminó la sesión");
  };

  //Para obtener favoritos actualizar ↓

  //1. ➜ actualizar lista de favoritos
  async function refreshFavorites() {
    if (!authUser?.id) return;
    const four = await fourFavService.getFourFavById(authUser?.id);
    const ids = four?.data?.map((item) => item?.id_mubi);
    const moviesDataFour = await movieService.getMoviePoster(ids);
    setTopFavorites(moviesDataFour);
  }

  //2.  ➜ cargar los favoritos

  const loadFavorites = useCallback(async () => {
    if (!authUser?.id) return;
    try {
      const four = await fourFavService.getFourFavById(authUser?.id); //recupero mis cuatro favoritos
      const ids = four.data.map((item) => item.id_mubi); //recupero los ids de los favoritos
      const moviesDataFour = await movieService.getMoviePoster(ids); // array url de posters
      setTopFavorites(moviesDataFour);
    } catch (error) {
      console.log("Error loading favorites", error);
    }
  }, [authUser?.id]);

  const getAllListsEntries = useCallback(async () => {
    try {
      const all = ListService.getAllListWithEntries(authUser?.id);
      setMyLists(all);
    } catch (error) {
      console.error(error);
    }
  }, [authUser?.id]);

  return (
    <UserContextAuth.Provider
      value={{
        userLog,
        loadingAuth,
        logOutFun,
        authUser,
        topFavorites,
        refreshFavorites,
        getAllListsEntries,
        myLists,
        funGetUser,
        loadFavorites,
        setTopFavorites,
        setLoadingAuth,
        setUserLog,
        accessToken,
        setAccessToken,
        loginUserFun,
      }}
    >
      {children}
    </UserContextAuth.Provider>
  );
};

export const useAuthUser = () => useContext(UserContextAuth);
