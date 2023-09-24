import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const ApProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [search, setSearch] = useState("cat");

  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    const body = document.querySelector("body");
    // console.log(body);
    body.classList.toggle("dark-theme", newTheme);
  };

  const userInput = (input) => {
    setSearch(input);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, search, userInput }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
