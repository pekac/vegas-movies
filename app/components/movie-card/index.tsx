import MovieActions from "../movie-actions";
import MovieContent from "../movie-content";
import MoviePoster from "../movie-poster";

import { IMovie } from "@models/movie";

export interface Props {
  movie: IMovie;
}

function MovieCard({ movie }: Props) {
  return (
    <div className="w-full max-w-[375px] h-[660px] bg-grey-900 rounded-xs shadow-black">
      <div className="w-full min-w-[320px] h-full rounded-xs">
        <MoviePoster
          id={movie.id}
          imgSrc={movie.imgSrc as string}
          isFavorite={movie.isFavorite}
        />
        <div className="px-3">
          <MovieContent
            overview={movie.overview}
            rating={movie.rating}
            releaseDate={movie.releaseDate}
            title={movie.title}
          />
          <MovieActions id={movie.id} onWatchlist={movie.onWatchlist} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
