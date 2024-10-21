import React, { useState } from "react";
import { createContext } from "react";
export const themContextCreate = createContext();
function ThemContextProvider({ children }) {
  let [theme, setTheme] = useState("light");
  let togleMode = () => {
    if (theme == "light") {
      setTheme("Dark");
      // document.body.style.backgroundColor = "black";
      // document.body.style.color = "white";
    } else {
      setTheme("light");
      // document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
    }
  };
  return (
    <themContextCreate.Provider value={{ theme, togleMode }}>
      {children}
    </themContextCreate.Provider>
  );
}

export default ThemContextProvider;
