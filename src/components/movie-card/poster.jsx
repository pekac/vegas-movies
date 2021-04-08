import React from "react";

import FavoriteBtn from "@components/favorite-btn";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w780/";

const MoviePoster = ({ movie }) => (
  <>
    <div className="movie-img">
      <FavoriteBtn movie={movie} />
    </div>
    <style jsx>
      {`
        .movie-img {
          width: 100%;
          min-width: 320px;
          height: 380px;
          background-image: url(${IMG_BASE_URL}${movie.poster_path});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          -webkit-mask-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            color-stop(0, black),
            color-stop(0.35, black),
            color-stop(0.5, black),
            color-stop(0.65, black),
            color-stop(0.85, rgba(0, 0, 0, 0.6)),
            color-stop(1, transparent)
          );
          position: relative;
        }
      `}
    </style>
  </>
);

export default MoviePoster;
