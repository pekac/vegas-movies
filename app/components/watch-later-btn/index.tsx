"use client";

import styles from "./styles.module.css";

function WatchLaterBtn({ onWatchlist }) {
  const toggleWatchLater = () => {};
  return (
    <div>
      <button className={styles["save-btn"]} onClick={toggleWatchLater}>
        {onWatchlist ? (
          <i className="material-icons active">check</i>
        ) : (
          <i className="material-icons">save</i>
        )}
      </button>
    </div>
  );
}

export default WatchLaterBtn;
