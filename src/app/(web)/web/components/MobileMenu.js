import styles from "./MobileMenu.module.css";
import animation from "../helpers/animate.module.css";

import { useContext } from "react";
import CloseBtn from "../svgButtons/CloseBtn";
import { Context } from "@/app/hooks/ContextWeb";
import { dot, navItems_db, navbar_db } from "@/app/(web)/web/databases/texts";
import GitHub from "../svgButtons/GitHub";
import LinkedIn from "../svgButtons/LinkedIn";
import Resume from "../svgButtons/Resume";

const MobileMenu = () => {
  const {
    mobile,
    currentMenu,
    setCurrentMenu,
    language,
    menuMobile,
    setMenuMobile,
    animate,
    setAnimate,
  } = useContext(Context);

  const closeMenu = () => {
    setAnimate(false);
    setTimeout(() => {
      setMenuMobile(false);
    }, 300);
  };

  const handleClick = (e) => {
    setCurrentMenu(e.target.id);
    closeMenu();
  };

  return (
    <>
      {menuMobile && (
        <nav
          className={`${styles.nav} ${
            animate ? animation.animeIn : animation.animeOut
          }`}
        >
          <CloseBtn click={closeMenu} />
          <ul>
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
          <div className={styles.nav_buttons}>
            <GitHub size={32} />
            <LinkedIn size={32} />
            <Resume size={32} />
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
