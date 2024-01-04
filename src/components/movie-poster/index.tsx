// import FavoriteBtn from "@components/favorite-btn";

import { IMG_BASE_URL } from "@constants/api";

export interface Props {
  id: number;
  imgSrc: string;
  isFavorite: boolean;
}

function MoviePoster({ id, imgSrc, isFavorite }: Props) {
  const src = `${IMG_BASE_URL}${imgSrc}`;
  return <img src={src} />;
}

export default MoviePoster;

/*

<div
      className="relative w-full h-auto bg-cover bg-center bg-no-repeat rounded-t-xs"
      style={{ backgroundImage: `url(${IMG_BASE_URL}${imgSrc})` }}
    >
       <FavoriteBtn isFavorite={isFavorite} movieId={id} /> 
      </div>

      */
