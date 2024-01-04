import MovieActions from "../movie-actions";

import { IMovie } from "@models/movie";

import { IMG_BASE_URL } from "@constants/api";

export interface Props {
  movie: IMovie;
}

function MovieCard({ movie }: Props) {
  const src = `${IMG_BASE_URL}${movie.imgSrc}`;
  return (
    <div className="w-[230px] h-[350px] rounded-xs transition-transform transform-gpu hover:scale-105 hover:cursor-pointer">
      <img src={src} alt={movie.title} title={movie.title} />
    </div>
  );
}

export default MovieCard;
