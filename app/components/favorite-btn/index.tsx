"use client";

import { useMovies } from "@context/movie";
import styles from "./styles.module.css";

export interface IFavoriteBtn {
  isFavorite: boolean;
  movieId: number;
}

function FavoriteBtn({ isFavorite, movieId }: IFavoriteBtn) {
  const { markFavorite } = useMovies();

  const toggleFavorite = () => {
    markFavorite(movieId);
  };

  return (
    <button className={styles["fav-btn"]} onClick={toggleFavorite}>
      {isFavorite ? (
        <i className="material-icons active">favorite</i>
      ) : (
        <i className="material-icons">favorite_border</i>
      )}
    </button>
  );
}

export default FavoriteBtn;
