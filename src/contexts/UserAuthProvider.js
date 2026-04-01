import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";
import userService from "../services/userService";

const UserContextAuth = createContext();

export const UserAuthProvider = ({ children }) => {
  const [userLog, setUserLog] = useState();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [dataMainUser, setDataMainUser] = useState({});
  const loginUserFun = async ({ user, pwd }) => {
    const response = await authService.authUser(user, pwd);
    if (response) {
      setUserLog(response);
    }
    setLoadingAuth(false);
    //console.log(response.accessToken);
  };
  /* const authData = JSON.parse(localStorage.getItem("auth"));
      const accessToken = authData?.accessToken;
      const username = authData?.userInfo?.username;
      console.log("Token:", accessToken);
      console.log("Username:", username); */

  //- - - - - - - - - helpler  - - - - - - - - -
  const getAuthData = () => {
    try {
      return JSON.parse(localStorage.getItem("auth"));
    } catch {
      return null;
    }
  };
  //obtener el usuario en base al log
  const handleGetUser = async () => {
    try {
      const authData = getAuthData();
      const token = authData?.accessToken;
      console.log(token);
      if (!authData?.accessToken) return; //- - - - - - aboarto sino hay token - - - - - - - -
      const userMain = await userService.findUser(authData.userInfo.username); //token
      setDataMainUser(userMain);
    } catch (error) {
      alert(`Error al tratar de encontrar al usuario con el username`);
    }
  };

  const logOutFun = () => {
    setUserLog(null);
  };

  //Para obtener favoritos actualizar ↓

  //1. ➜ actualizar lista de favoritos
  async function refreshFavorites() {}

  useEffect(() => {
    const authData = getAuthData();
    if (authData) {
      setUserLog(authData);

      const username = authData?.userInfo?.username;
      if (username) {
        handleGetUser(username);
      }
      setLoadingAuth(false);
    }
  }, []); //al montar mi componente voy a tratar de recuperar el usuario
  return (
    <UserContextAuth.Provider
      value={{
        userLog,
        loadingAuth,
        loginUserFun,
        logOutFun,
        dataMainUser,
      }}
    >
      {children}
    </UserContextAuth.Provider>
  );
};

export const useAuthUser = () => useContext(UserContextAuth);
