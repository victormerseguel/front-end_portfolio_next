import styles from "./Projects.module.css";

import { useContext, useRef } from "react";
import { Context } from "@/app/hooks/ContextWeb";
import {
  navItems_db,
  navbar_db,
  projects_db,
} from "@/app/(web)/web/databases/texts";
import {
  allProjectsDB,
  highlightDB,
} from "@/app/(web)/web/databases/projectsList";
import ProjectsMap from "./ProjectsMap";

const Projects = ({}) => {
  const { currentMenu, language } = useContext(Context);
  const projectsRef = useRef();

  return (
    <>
      {currentMenu === navItems_db[1] && (
        <section className={styles.projects} ref={projectsRef}>
          <div className={styles.projects_header}>
            <h2>{navbar_db[1][language]}</h2>
            <p>{projects_db[0][language]}</p>
          </div>
          <div className={styles.projects_container}>
            <h3>{projects_db[1][language]}</h3>
            <div className={styles.highlights_container}>
              <ProjectsMap db={highlightDB} ref={projectsRef} />
            </div>
            <h3>{projects_db[2][language]}</h3>
            <div className={styles.all_projects_container}>
              <ProjectsMap db={allProjectsDB} ref={projectsRef} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
