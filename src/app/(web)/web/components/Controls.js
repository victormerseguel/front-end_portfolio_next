import styles from "./Controls.module.css";

import { useContext, useEffect, useState } from "react";
import { controls_db } from "@/app/(web)/web/databases/texts";
import { Context } from "@/app/hooks/ContextWeb";

const Controls = () => {
  const { language, setLanguage, theme, setTheme } = useContext(Context);
  let root;

  if (typeof window !== "undefined") root = document.querySelector(":root");

  const lightTheme = () => {
    root.style.setProperty("--background-color", "#f1f1f1");
    root.style.setProperty("--color", "#b3b3b3");
    root.style.setProperty("--font-color", "#3d3d3d");
    root.style.setProperty("--box-background", "#f3f3f3c1");
    root.style.setProperty("--box-shadow", "0px 0px 25px 5px #dbdbdb");
    root.style.setProperty("--link", "#3084c0");
  };

  const darkTheme = () => {
    root.style.setProperty("--background-color", "#1b1b1b");
    root.style.setProperty("--color", "#494949");
    root.style.setProperty("--font-color", "#c8c8c8");
    root.style.setProperty("--box-background", "#454545c1");
    root.style.setProperty("--box-shadow", "0px 0px 15px 5px #121212");
    root.style.setProperty("--link", "#3084c0");
  };

  useEffect(() => {
    theme === "light" ? lightTheme() : darkTheme();
  }, [theme]);

  return (
    <div className={styles.controlls_container}>
      <div className={styles.theme}>
        {controls_db[0].map((th, i) => (
          <p key={th} onClick={(e) => setTheme(controls_db[0][i])}>
            <span>{theme === th ? controls_db[2][0] : controls_db[2][1]}</span>
            {th.charAt(0).toUpperCase() + th.slice(1)}
          </p>
        ))}
      </div>
      <div className={styles.language}>
        {controls_db[1].map((lang, i) => (
          <p key={lang} onClick={(e) => setLanguage(controls_db[1][i])}>
            <span>
              {language === lang ? controls_db[2][0] : controls_db[2][1]}
            </span>
            {lang.toUpperCase()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Controls;
