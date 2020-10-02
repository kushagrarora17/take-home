import React, { useState, useEffect, createContext } from "react";
import { DEFAULT_THEME_IS_DARK, THEME_STORGE_KEY } from "../utils/constants";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [isDark, setIsDark] = useState(
    sessionStorage.getItem(THEME_STORGE_KEY)
      ? sessionStorage.getItem(THEME_STORGE_KEY) === "true"
      : DEFAULT_THEME_IS_DARK
  );

  const changeTheme = (newIsDark) => {
    setIsDark(newIsDark);

    sessionStorage.setItem(
      THEME_STORGE_KEY,
      newIsDark
    );
  };


  useEffect(() => {
    if(isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  })


  return (
    <ThemeContext.Provider
      value={{
        isDark,
        setIsDark: changeTheme
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
