import styles from "./styles.module.css";

import FavoriteBtn from "@components/favorite-btn";

import { IMG_BASE_URL } from "@constants/api";

export interface Props {
  id: number;
  imgSrc: string;
  isFavorite: boolean;
}

function MoviePoster({ id, imgSrc, isFavorite }: Props) {
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
