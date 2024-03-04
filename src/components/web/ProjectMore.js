"use client";
import { useContext, useEffect } from "react";
import styles from "./ProjectMore.module.css";
import { more_db } from "./databases/texts";
import { Context } from "./hooks/Context";
import { projectsList_db } from "./databases/projectsList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProjectView from "./svgImages/ProjectView";
import GitHub from "./svgImages/GitHub";

const ProjectMore = () => {
  const { language, project, setProject, setCurrentMenu } = useContext(Context);
  const nameProject = usePathname().replace("/web/projects/", "");
  const pathnameRoot = usePathname().replace("/projects/" + nameProject, "");
  const router = useRouter();

  useEffect(() => {
    projectsList_db.map((item) => {
      if (item.thumb === nameProject + ".jpg") setProject(item);
    });
  }, [project]);

  const handleClose = () => {
    router.push(pathnameRoot);
    setCurrentMenu("projects");
  };

  return (
    <>
      {project && (
        <div className={styles.project_more_container} onClick={handleClose}>
          <div
            className={styles.project_more_content}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.left}>
              <img
                className={styles.img_cover}
                src={`/assets/img/${project.thumb}`}
                alt={`Thumb ${project.title[language]}`}
              />
              <div className={styles.project_more_buttons}>
                <ProjectView size={24} a={project.projectURL} />
                <GitHub
                  size={32}
                  a={project.githubURL}
                  text={more_db.repository[language]}
                />
              </div>
            </div>
            <div className={styles.right}>
              <h4>{project.title[language]}</h4>
              {project.description[language].split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <span
              className={styles.project_more_close}
              onClick={() => handleClose()}
            >
              X
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectMore;
