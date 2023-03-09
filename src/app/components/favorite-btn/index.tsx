"use client";

import styles from "./styles.module.css";

function FavoriteBtn({ movie }) {
  const toggleFavorite = () => {};
  const isActive = false;
  return (
    <button className={styles["fav-btn"]} onClick={toggleFavorite}>
      {isActive ? (
        <i className="material-icons active">favorite</i>
      ) : (
        <i className="material-icons">favorite_border</i>
      )}
    </button>
  );
}

export default FavoriteBtn;
