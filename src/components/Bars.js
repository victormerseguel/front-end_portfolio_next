import styles from "./Bars.module.css";

const Bars = () => {
  return (
    <div className={styles.bars}>
      <span className={styles.top_bar}></span>
      <span className={styles.bottom_bar}></span>
    </div>
  );
};

export default Bars;
