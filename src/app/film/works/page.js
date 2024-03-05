// import { orderedFiles } from "../db/files";
import Video from "../../../components/film/Video";

import style from "./page.module.css";
// import { Routes, Route, useNavigate } from "react-router-dom";

const Works = () => {
  // const navigate = useNavigate();

  // const handleClick = ({ target }) => {
  //   const idTarget = !target.id ? target.parentElement.id : target.id;
  //   document.body.style.overflow = "hidden";
  //   navigate(`/video/${idTarget.replace("Label", "")}`);
  // };

  // function showLabel({ target }) {
  //   const labelDiv = document.querySelector(`#${target.id}Label`);
  //   labelDiv.classList.remove(style.hide);
  // }

  // function hideLabel({ target }) {
  //   const idTarget = !target.id ? target.parentElement.id : target.id;
  //   const labelDiv = document.querySelector(`#${idTarget}`);
  //   if (idTarget.includes("Label")) labelDiv.classList.add(style.hide);
  // }

  return (
    <div>
      {/* <div className={style.thumbContainer} id="thumbContainer">
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
            <div
              className={`${style.description} ${style.hide}`}
              id={`${file.id}Label`}
              onClick={(e) => handleClick(e)}
            >
              <h4>{file.descriptType}</h4>
              <h5>{file.descripTitle}</h5>
              <h6>{file.descripClient}</h6>
            </div>
          </div>
        ))}
      </div>
      <Routes>
        <Route path="video/:id" element={<Video />} />
      </Routes> */}
    </div>
  );
};

export default Works;
