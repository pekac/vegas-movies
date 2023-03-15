import styles from "./styles.module.css";

import FavoriteBtn from "@/app/components/favorite-btn";

import { IMG_BASE_URL } from "@/app/constants/api";

function MoviePoster({ id, isFavorite, imgSrc }) {
  return (
    <div
      className={styles["movie-img"]}
      style={{ backgroundImage: `url(${IMG_BASE_URL}${imgSrc})` }}
    >
      <FavoriteBtn isFavorite={isFavorite} movieId={id} />
    </div>
  );
}

export default MoviePoster;
