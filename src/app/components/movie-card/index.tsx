import styles from "./styles.module.css";

import MovieActions from "../movie-actions";
import MovieContent from "../movie-content";
import MoviePoster from "../movie-poster";

function MovieCard({ movie }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["movie"]}>
        <MoviePoster movie={movie} />
        <div className={styles["movie-content"]}>
          <MovieContent movie={movie} />
          <MovieActions movie={movie} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
