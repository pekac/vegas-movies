"use client";

import styles from "./styles.module.css";

function WatchLaterBtn({ movie }) {
  const toggleWatchLater = () => {};
  const isActive = false;
  return (
    <div>
      <button className={styles["save-btn"]} onClick={toggleWatchLater}>
        {isActive ? (
          <i className="material-icons active">check</i>
        ) : (
          <i className="material-icons">save</i>
        )}
      </button>
    </div>
  );
}

export default WatchLaterBtn;
