"use client";

import styles from "./Nav.module.css";

import { dot, navItems_db, navbar_db } from "@/databases/texts";
import { useContext } from "react";
import { Context } from "@/hooks/Context";

import GitHub from "./svgImages/GitHub";
import LinkedIn from "./svgImages/LinkedIn";
import MenuMobile from "./svgImages/MenuMobile";
import Resume from "./svgImages/Resume";

const Nav = () => {
  const { language, currentMenu, setCurrentMenu, mobile } = useContext(Context);

  const handleClick = (e) => {
    setCurrentMenu(e.target.id);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <div className={styles.name}>
          <h2>Victor Merseguel</h2>
          <h3>
            Front-End Developer -{" "}
            <span className={styles.project_icon}>
              <img src="/assets/img/html-icon.svg" alt="html" />
              <img src="/assets/img/css-icon.svg" alt="css" />
              <img src="/assets/img/javascript-icon.svg" alt="javascript" />
              <img src="/assets/img/react-icon.svg" alt="react" />
              <img src="/assets/img/nextjs-icon.svg" alt="next" />
            </span>
          </h3>
        </div>
        <div className={styles.nav_buttons}>
          <GitHub size={32} mobile={mobile} />
          <LinkedIn size={32} mobile={mobile} />
          <Resume size={32} mobile={mobile} />
          <MenuMobile mobile={mobile} />
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
              onClick={(e) => handleClick(e)}
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
