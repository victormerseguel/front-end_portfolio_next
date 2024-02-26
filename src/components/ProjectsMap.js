import styles from "./Projects.module.css";

import { Fragment, useContext } from "react";
import { Context } from "@/hooks/Context";
import { technologies } from "@/databases/projectsList";

const ProjectsMap = ({ db }) => {
  const { language } = useContext(Context);

  return (
    <>
      {db.map((item, i) => (
        <Fragment key={i}>
          {
            <div className={styles.project}>
              <img
                src={`/assets/img/${item.thumb}`}
                alt={item.title[language]}
              />
              <p className={styles.titles}>
                {item.title[language]}
                <span className={styles.project_icon}>
                  {technologies.map((tech, i) =>
                    item.technology[tech] ? (
                      <img
                        src={`/assets/img/${tech}-icon.svg`}
                        alt="html"
                        className={tech === "nextjs" ? styles.nextjs : null}
                        key={i}
                      />
                    ) : null
                  )}
                </span>
              </p>
            </div>
          }
        </Fragment>
      ))}
    </>
  );
};

export default ProjectsMap;
