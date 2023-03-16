import styles from "./styles.module.css";

import WatchLaterBtn from "@/app/components/watch-later-btn";
import TrailerBtn from "@/app/components/trailer-btn";

function MovieActions({ id, onWatchlist }) {
  return (
    <div className={styles["movie-actions"]}>
      <TrailerBtn />
      <WatchLaterBtn movieId={id} onWatchlist={onWatchlist} />
    </div>
  );
}

export default MovieActions;
