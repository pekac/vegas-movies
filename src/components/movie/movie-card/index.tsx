import { IMG_BASE_URL } from "@constants/api";

import { IconButton } from "@components/core";

import { useMovies } from "@context/movie";

import { IMovie } from "@models/movie";

export interface IMovieCard {
  movie: IMovie;
}

export function MovieCard({ movie }: IMovieCard) {
  const { updateWatchlistStatus } = useMovies();
  const { id, imgSrc, onWatchlist, title } = movie;

  const updateWatchlist = () => {
    updateWatchlistStatus(id, onWatchlist);
  };

  const src = `${IMG_BASE_URL}${imgSrc}`;
  const bookmarkSrc = onWatchlist
    ? "/icons/bookmark-added.svg"
    : "/icons/bookmark.svg";

  return (
    <div className="relative w-[230px] h-[350px] transition-transform transform-gpu hover:scale-105 hover:cursor-pointer">
      <img src={src} alt={title} title={title} />
      <IconButton
        classes="absolute top-[5px] right-0"
        src={bookmarkSrc}
        onClick={updateWatchlist}
      />
    </div>
  );
}
