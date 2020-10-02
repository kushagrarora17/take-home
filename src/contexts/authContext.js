import React, { useState, createContext } from "react";
import { DEFAULT_USER, USER_STORGE_KEY } from '../utils/constants';

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(
    sessionStorage.getItem(USER_STORGE_KEY)
      ? sessionStorage.getItem(USER_STORGE_KEY)
      : DEFAULT_USER
  );

  const changeUser = (newUser) => {
    setUser(newUser);
    sessionStorage.setItem(
      USER_STORGE_KEY,
      newUser
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: changeUser
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
