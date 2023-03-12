"use client";

import styles from "./styles.module.css";

function TrailerModal({ trailer, onCloseTrailer }) {
  if (!trailer) {
    return null;
  }

  return (
    <div className={styles["popup-container"]} onClick={onCloseTrailer}>
      <iframe
        className={styles["trailer"]}
        type="text/html"
        height="390"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

export default TrailerModal;
