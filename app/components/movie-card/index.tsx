import styles from "./styles.module.css";

import MovieActions from "../movie-actions";
import MovieContent from "../movie-content";
import MoviePoster from "../movie-poster";

import { IMovie } from "@models/movie";

export interface Props {
  movie: IMovie;
}

function MovieCard({ movie }: Props) {
  return (
    <div className={styles["container"]}>
      <div className={styles["movie"]}>
        <MoviePoster
          id={movie.id}
          imgSrc={movie.imgSrc as string}
          isFavorite={movie.isFavorite}
        />
        <div className={styles["movie-content"]}>
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
