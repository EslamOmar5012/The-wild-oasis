import { useContext } from "react";
import { DarkModeContext } from "../context/ThemeContext";

const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context)
    throw new Error("Can't use dark mode context aouside its Boundries");

  return context;
};

export { useDarkMode };
