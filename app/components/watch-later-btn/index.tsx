"use client";

import styles from "./styles.module.css";

import { useMovies } from "@context/movie";

export interface Props {
  movieId: number;
  onWatchlist: boolean;
}

function WatchLaterBtn({ movieId, onWatchlist }: Props) {
  const { updateWatchlistStatus } = useMovies();

  const toggleWatchLater = () => {
    updateWatchlistStatus(movieId, onWatchlist);
  };

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
