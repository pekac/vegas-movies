import React, { useContext, useEffect, useState } from "react";

import { FavoritesContext } from "@context/favorites";

const FavoriteBtn = ({ movie }) => {
  const [isActive, setIsActive] = useState(false);

  const { favorites, isFavorite, update } = useContext(FavoritesContext);

  useEffect(() => {
    const isActive = isFavorite(movie);
    setIsActive(isActive);
  }, [favorites]);

  const toggleFavorite = () => update(movie);

  return (
    <button className="fav-btn" onClick={toggleFavorite}>
      {isActive ? (
        <i className="material-icons active">favorite</i>
      ) : (
        <i className="material-icons">favorite_border</i>
      )}
      <style jsx>{`
        .fav-btn {
          float: right;
        }
        .fav-btn i {
          color: #e7e7e7;
          font-size: 42px;
          text-align: right;
        }
      `}</style>
    </button>
  );
};

export default FavoriteBtn;
