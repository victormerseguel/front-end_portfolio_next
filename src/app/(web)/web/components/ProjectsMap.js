import styles from "./Projects.module.css";

import { Fragment, forwardRef, useContext, useRef } from "react";
import { Context } from "@/app/hooks/ContextWeb";
import { technologies } from "@/app/(web)/web/databases/projectsList";
import { useRouter } from "next/navigation";

const ProjectsMap = ({ db }, ref) => {
  const { language, setProjectScroll, theme } = useContext(Context);
  const router = useRouter();

  const handleClick = (item) => {
    setProjectScroll((ref.current.getBoundingClientRect().y - 190) * -1);
    router.push(`/web/projects/${item.thumb.replace(".jpg", "")}`);
  };

  return (
    <>
      {db.map((item, i) => (
        <Fragment key={i}>
          {
            <div className={styles.project} onClick={() => handleClick(item)}>
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
                        src={`/assets/img/${tech}${
                          tech === "nextjs"
                            ? theme === "light"
                              ? "light"
                              : ""
                            : ""
                        }-icon.svg`}
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

export default forwardRef(ProjectsMap);
