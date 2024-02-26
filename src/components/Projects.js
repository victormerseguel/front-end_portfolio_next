import styles from "./Projects.module.css";

import { useContext } from "react";
import { Context } from "@/hooks/Context";
import { navItems_db, navbar_db, projects_db } from "@/databases/texts";
import { allProjectsDB, highlightDB } from "@/databases/projectsList";
import ProjectsMap from "./ProjectsMap";

const Projects = () => {
  const { currentMenu, language } = useContext(Context);

  return (
    <>
      {currentMenu === navItems_db[1] && (
        <section className={styles.projects}>
          <div className={styles.projects_header}>
            <h2>{navbar_db[1][language]}</h2>
            <p>{projects_db[0][language]}</p>
          </div>
          <div className={styles.projects_container}>
            <h3>{projects_db[1][language]}</h3>
            <div className={styles.highlights_container}>
              <ProjectsMap db={highlightDB} />
            </div>
            <h3>{projects_db[2][language]}</h3>
            <div className={styles.all_projects_container}>
              <ProjectsMap db={allProjectsDB} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
