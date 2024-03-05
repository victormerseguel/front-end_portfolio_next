"use client";
// import { Fragment, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import { orderedFiles } from "../db/files";
// import closebtn from "../assets/close.png";

import style from "./Video.module.css";

const Video = () => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const videoRef = useRef();

  // const handleClickOut = (e) => {
  //   document.body.style.overflow = "scroll";
  //   navigate("/");
  // };

  return (
    <div className={style.divVid} onClick={(e) => handleClickOut(e)}>
      {/* <img
        className={style.closeBtn}
        src={closebtn}
        alt=""
        onClick={handleClickOut}
      />
      {orderedFiles.map((file) =>
        id === file.id ? (
          <Fragment key={file.descripTitle}>
            <iframe
              id={`${id}Video`}
              className={style.video}
              width="100%"
              height="fit-content"
              src={`https://player.vimeo.com/video/${file.patch}?portrait=0&title=0&autoplay=1&controls=0&keyboard=1&loop=1&playsinline=0&speed=0`}
              title="0"
              portrait="false"
              allow="autoplay; fullscreen; picture-in-picture"
              ref={videoRef}
            ></iframe>
            <div className={style.videoLabel} onClick={handleClickOut}>
              <h4>{file.descriptType}</h4>
              <h5>{file.descripTitle}</h5>
              <h6>{file.descripClient}</h6>
            </div>
          </Fragment>
        ) : null
      )} */}
    </div>
  );
};

export default Video;
