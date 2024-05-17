import { useRef } from "react";
import styles from "./Canva.module.css";
import Sketch from "../vanilla/sketch";

const Canva = () => {
  const canvasRef = useRef();

  return (
    <div className={styles.background}>
      <canvas ref={canvasRef}></canvas>
      <Sketch ref={canvasRef} />
    </div>
  );
};

export default Canva;
