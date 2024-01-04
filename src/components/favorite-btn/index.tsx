"use client";

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
    <button className="float-right" onClick={toggleFavorite}>
      {isFavorite ? (
        <span className="!h-[42px] !w-[42px] bg-white z-30">
          <img title="favorite" alt="favorite" src="/icons/fav-on.svg" />
        </span>
      ) : (
        <span className="!h-[42px] !w-[42px] bg-white z-30">
          <img title="favorite" alt="favorite" src="/icons/fav-off.svg" />
        </span>
      )}
    </button>
  );
}

export default FavoriteBtn;
