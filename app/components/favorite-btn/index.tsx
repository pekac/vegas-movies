"use client";

import { useMovies } from "@context/movie";

export interface Props {
  isFavorite: boolean;
  movieId: number;
}

//  i {
//   color: #e7e7e7;
//   font-size: 42px;
//   text-align: right;
// }

function FavoriteBtn({ isFavorite, movieId }: Props) {
  const { updateFavoriteStatus } = useMovies();

  const toggleFavorite = () => {
    updateFavoriteStatus(movieId, isFavorite);
  };

  return (
    <button className="float-right" onClick={toggleFavorite}>
      {isFavorite ? (
        <i className="material-icons active">favorite</i>
      ) : (
        <i className="material-icons">favorite_border</i>
      )}
    </button>
  );
}

export default FavoriteBtn;
