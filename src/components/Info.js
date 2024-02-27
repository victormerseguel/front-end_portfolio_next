import styles from "./Info.module.css";

import { Context } from "@/hooks/Context";
import { useContext } from "react";
import { infos_db, navItems_db, navbar_db } from "@/databases/texts";

const Info = () => {
  const { language, currentMenu, setCurrentMenu } = useContext(Context);

  return (
    <>
      {currentMenu === navItems_db[2] && (
        <section className={styles.info}>
          <h2>{navbar_db[2][language]}</h2>
          <div className={styles.info_container}>
            {infos_db[0][language].split("\n").map((item) => (
              <p key={item}>{item}</p>
            ))}
            <p
              className={styles.learn_more}
              onClick={() => setCurrentMenu("contacts")}
            >
              {infos_db[1][language]}
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Info;
