"use client";

import styles from "./Nav.module.css";

import { dot, navItems_db, navbar_db } from "@/app/(web)/web/databases/texts";
import { useContext, useEffect } from "react";
import { Context } from "@/app/hooks/ContextWeb";

import GitHub from "../svgButtons/GitHub";
import LinkedIn from "../svgButtons/LinkedIn";
import MenuMobile from "../svgButtons/MenuMobile";
import Resume from "../svgButtons/Resume";

const Nav = () => {
  const {
    language,
    currentMenu,
    setCurrentMenu,
    mobile,
    setMobile,
    setMenuMobile,
    setAnimate,
    theme,
  } = useContext(Context);

  const resize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 815) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
  };
  useEffect(() => {
    resize();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", resize);
    }
  });

  const handleClick = () => {
    setAnimate(true);
    setMenuMobile(true);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <div className={styles.name}>
          <h2>Victor Merseguel</h2>
          <h3 className={mobile ? styles.break : null}>
            Front-End Developer
            <span className={mobile ? styles.hide : null}> - </span>
            <span className={styles.project_icon}>
              <img src="/assets/img/html-icon.svg" alt="html" />
              <img src="/assets/img/css-icon.svg" alt="css" />
              <img src="/assets/img/javascript-icon.svg" alt="javascript" />
              <img src="/assets/img/react-icon.svg" alt="react" />
              <img
                src={`/assets/img/nextjs${
                  theme === "light" ? "" : "light"
                }-icon.svg`}
                alt="next"
              />
            </span>
          </h3>
        </div>
        <div className={styles.nav_buttons}>
          {!mobile && <GitHub size={32} />}
          {!mobile && <LinkedIn size={32} />}
          {!mobile && <Resume size={32} />}
          {mobile && <MenuMobile click={handleClick} />}
        </div>
      </div>
      <ul className={mobile ? styles.hide : null}>
        {navbar_db.map((item, i) => (
          <li key={i}>
            <p
              style={
                currentMenu === navItems_db[i]
                  ? { fontSize: "1.3rem", margin: "-5px 0" }
                  : { cursor: "pointer" }
              }
              id={navItems_db[i]}
              onClick={(e) => setCurrentMenu(e.target.id)}
            >
              {currentMenu === navItems_db[i] ? dot : item[language]}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
