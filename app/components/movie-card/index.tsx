import styles from "./styles.module.css";

import MovieActions from "../movie-actions";
import MovieContent from "../movie-content";
import MoviePoster from "../movie-poster";

function MovieCard({ movie }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["movie"]}>
        <MoviePoster
          id={movie.id}
          isFavorite={movie.isFavorite}
          imgSrc={movie.imgSrc}
        />
        <div className={styles["movie-content"]}>
          <MovieContent
            title={movie.title}
            overview={movie.overview}
            releaseDate={movie.releaseDate}
            rating={movie.rating}
          />
          <MovieActions onWatchlist={movie.onWatchlist} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
