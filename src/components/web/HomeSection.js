import styles from "./HomeSection.module.css";

import { useContext } from "react";
import { Context } from "@/components/hooks/ContextWeb";
import { home_db, navItems_db } from "@/components/web/databases/texts";
import parse from "html-react-parser";

const HomeSection = () => {
  const { language, currentMenu, setCurrentMenu } = useContext(Context);

  return (
    <>
      {currentMenu === navItems_db[0] && (
        <section className={styles.home}>
          <div className={styles.home_container}>
            {home_db[0][language].split("\n").map((item, i) => (
              <p key={i}>{parse(item)}</p>
            ))}
            <p
              className={styles.learn_more}
              onClick={() => setCurrentMenu("about")}
            >
              {home_db[1][language]}
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default HomeSection;
