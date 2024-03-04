import styles from "./Contacts.module.css";

import { useContext } from "react";
import { Context } from "@/components/web/hooks/Context";
import {
  infos_db,
  navItems_db,
  navbar_db,
} from "@/components/web/databases/texts";
import GitHub from "./svgImages/GitHub";
import LinkedIn from "./svgImages/LinkedIn";
import Resume from "./svgImages/Resume";

const Contacts = () => {
  const { language, currentMenu } = useContext(Context);

  return (
    <>
      {currentMenu === navItems_db[3] && (
        <section className={styles.contact}>
          <div className={styles.contact_container}>
            <h2>{navbar_db[3][language]}</h2>
            <div className={styles.contact_buttons}>
              <GitHub size={52} />
              <LinkedIn size={52} />
              <Resume size={52} />
            </div>
            <p>{infos_db[2][language]}</p>
            <p className={styles.mail}>
              E-mail: merseguel@gmail.com
              <span>{infos_db[3][language]}</span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Contacts;
