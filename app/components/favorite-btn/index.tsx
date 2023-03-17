"use client";

import styles from "./styles.module.css";

import { useMovies } from "@context/movie";

export interface Props {
  isFavorite: boolean;
  movieId: number;
}

function FavoriteBtn({ isFavorite, movieId }: Props) {
  const { updateFavoriteStatus } = useMovies();

  const toggleFavorite = () => {
    updateFavoriteStatus(movieId, isFavorite);
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
