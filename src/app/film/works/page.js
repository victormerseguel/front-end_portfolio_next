"use client";
import { useEffect } from "react";
import { orderedFiles } from "../db/files";

import style from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Works = () => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "scroll";
  }, []);

  const handleClick = (id) => {
    document.body.style.overflow = "hidden";
  };

  function showLabel({ target }) {
    const labelDiv = document.querySelector(`#${target.id}Label`);
    labelDiv.classList.remove(style.hide);
  }

  function hideLabel({ target }) {
    const idTarget = !target.id ? target.parentElement.id : target.id;
    const labelDiv = document.querySelector(`#${idTarget}`);
    if (idTarget.includes("Label")) labelDiv.classList.add(style.hide);
  }

  return (
    <>
      <div className={style.thumbContainer} id="thumbContainer">
        {orderedFiles.map((file, index) => (
          <div
            key={index}
            className={style.divImg}
            style={{ position: "relative" }}
            onMouseEnter={(e) => showLabel(e)}
            onMouseLeave={(e) => hideLabel(e)}
          >
            <img
              src={file.imgURL}
              className={style.thumb}
              alt={file.nome}
              id={file.id}
            />
            <Link
              href={`/film/works/projects/${file.id}`}
              onClick={handleClick(file.id)}
              scroll={false}
            >
              <div
                className={`${style.description} ${style.hide}`}
                id={`${file.id}Label`}
              >
                <h4>{file.descriptType}</h4>
                <h5>{file.descripTitle}</h5>
                <h6>{file.descripClient}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Works;
