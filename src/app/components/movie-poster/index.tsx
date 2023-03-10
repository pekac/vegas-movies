import styles from "./styles.module.css";

import FavoriteBtn from "@components/favorite-btn";

import { IMG_BASE_URL } from "@constants/api";

function MoviePoster({ movie }) {
  return (
    <div
      className={styles["movie-img"]}
      style={{ backgroundImage: `url(${IMG_BASE_URL}${movie.poster_path})` }}
    >
      <FavoriteBtn movie={movie} />
    </div>
  );
}

export default MoviePoster;
