import styles from "./Contacts.module.css";

import { useContext, useState } from "react";
import { Context } from "@/app/(_web)/web/hooks/ContextWeb";
import {
  infos_db,
  navItems_db,
  navbar_db,
} from "@/app/(_web)/web/databases/texts";
import GitHub from "../svgButtons/GitHub";
import LinkedIn from "../svgButtons/LinkedIn";
import Resume from "../svgButtons/Resume";

const Contacts = () => {
  const { language, currentMenu } = useContext(Context);
  const [mailCopy, setMailCopy] = useState(false);
  const mail = "merseguel@gmail.com";

  const handleClick = () => {
    setMailCopy(true);
    navigator.clipboard.writeText(mail);
    setTimeout(() => {
      setMailCopy(false);
    }, 1500);
  };

  return (
    <>
      {currentMenu === navItems_db[3] && (
        <section className={styles.contact}>
          <div className={styles.contact_container}>
            <h2>{navbar_db[3][language]}</h2>
            <div className={styles.contact_buttons}>
              <GitHub size={52} hover />
              <LinkedIn size={52} hover />
              <Resume size={52} hover />
            </div>
            <p>{infos_db[2][language]}</p>
            <p className={styles.mail} onClick={handleClick}>
              E-mail: merseguel@gmail.com
              <span
                className={mailCopy ? styles.copied : ""}
                onMouseLeave={() => setMailCopy(false)}
              >
                {!mailCopy ? infos_db[3][language] : infos_db[4][language]}
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Contacts;
