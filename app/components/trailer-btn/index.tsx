"use client";

import styles from "./styles.module.css";

function TrailerBtn() {
  const showTrailer = () => {};
  return (
    <button className={styles["watch-btn"]} onClick={showTrailer}>
      <h3 className="text-sm font-normal text-primary">
        <i className="material-icons">play_arrow</i>WATCH TRAILER
      </h3>
    </button>
  );
}

export default TrailerBtn;
