"use client";

import styles from "./styles.module.css";

function TrailerBtn({ movie }) {
  const showTrailer = () => {};

  return (
    <button className={styles["watch-btn"]} onClick={showTrailer}>
      <h3>
        <i className="material-icons">play_arrow</i>WATCH TRAILER
      </h3>
    </button>
  );
}

export default TrailerBtn;
