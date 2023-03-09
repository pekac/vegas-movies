import styles from "./styles.module.css";

import WatchLaterBtn from "@components/watch-later-btn";
import TrailerBtn from "@components/trailer-btn";

function MovieActions({ movie }) {
  return (
    <div className={styles["movie-actions"]}>
      <TrailerBtn movie={movie} />
      <WatchLaterBtn movie={movie} />
    </div>
  );
}

export default MovieActions;
