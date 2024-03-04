"use client";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [mask, setMask] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [currentMenu, setCurrentMenu] = useState("home");
  const [mobile, setMobile] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const [theme, setTheme] = useState("light");
  const [animate, setAnimate] = useState(false);
  const [project, setProject] = useState(null);
  const [projectsScroll, setProjectScroll] = useState(0);

  return (
    <Context.Provider
      value={{
        mask,
        setMask,
        language,
        setLanguage,
        currentMenu,
        setCurrentMenu,
        mobile,
        setMobile,
        theme,
        setTheme,
        menuMobile,
        setMenuMobile,
        animate,
        setAnimate,
        project,
        setProject,
        projectsScroll,
        setProjectScroll,
      }}
    >
      {children}
    </Context.Provider>
  );
};
