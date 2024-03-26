"use client";
import { useContext, useState } from "react";
import styles from "./Mask.module.css";
import { Context } from "@/components/hooks/ContextWeb";

const Mask = () => {
  const { mask, setMask } = useContext(Context);
  const [opacity, setOpacity] = useState(true);
  const [title, setTitle] = useState(true);
  const time = 1000;

  const showMask = () => {
    setTimeout(() => {
      setTitle(false);
    }, time);

    setTimeout(() => {
      setOpacity(false);
    }, time + 500);

    setTimeout(() => {
      setMask(false);
    }, time + 1500);
  };

  showMask();

  return (
    <>
      {mask && (
        <div className={styles.mask} style={!opacity ? { opacity: "0" } : null}>
          <h1 style={!title ? { opacity: "0" } : null}>
            Victor Merseguel <span>Front-End Developer</span>
          </h1>
        </div>
      )}
    </>
  );
};

export default Mask;
