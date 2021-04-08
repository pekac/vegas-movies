import React, { useContext, useEffect, useState } from "react";

import FavoriteBtn from "@components/favorite-btn";
import WatchLaterBtn from "@components/watch-later-btn";

import { TrailerContext } from "@context/trailer";
import { FavoritesContext } from "@context/favorites";
import { WatchLaterContext } from "@context/watch-later";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w780/";

const MovieCard = ({ movie }) => {
  const [isFavMovie, setIsFav] = useState(false);
  const [isSavedMovie, setIsSaved] = useState(false);

  const { getTrailer } = useContext(TrailerContext);
  const { favorites, isFavorite, update: updateFavs } = useContext(
    FavoritesContext
  );
  const { savedMovies, isSaved, update: updateSaved } = useContext(
    WatchLaterContext
  );

  useEffect(() => {
    const isFavMovie = isFavorite(movie);
    setIsFav(isFavMovie);
  }, [favorites]);

  useEffect(() => {
    const isSavedMovie = isSaved(movie);
    setIsSaved(isSavedMovie);
  }, [savedMovies]);

  const toggleFavorite = () => updateFavs(movie);
  const toggleWatchLater = () => updateSaved(movie);
  const showTrailer = () => getTrailer(movie);

  return (
    <div>
      <div className="container">
        <div className="movie">
          <div className="movie-img">
            <FavoriteBtn onClick={toggleFavorite} isActive={isFavMovie} />
          </div>
          <div className="movie-content">
            <h1 className="movie-title">{movie.original_title}</h1>
            <p className="release-date">Release date: {movie.release_date}</p>
            <div className="summary-row">
              <h5>SUMMARY</h5>
              <div className="movie-grade">{movie.vote_average}/10</div>
            </div>
            <p className="movie-description">{movie.overview}</p>
            <div className="movie-actions">
              <button className="watch-btn" onClick={showTrailer}>
                <h3>
                  <i className="material-icons">play_arrow</i>WATCH TRAILER
                </h3>
              </button>
              <WatchLaterBtn
                toggleWatchLater={toggleWatchLater}
                isActive={isSavedMovie}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 375px;
          max-width: 375px;
          height: 660px;
          background-color: #1e1b26;
          box-shadow: 5px 5px 115px -14px black;
          border-radius: 4px;
        }
        @media (max-width: 375px) {
          .container {
            width: 100%;
          }
        }
        .movie {
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 38%,
            rgba(255, 255, 255, 0.06) 39%,
            rgba(30, 27, 38, 0.88) 53%,
            #1e1b26 55%
          );
          width: 100%;
          min-width: 320px;
          height: 660px;
          display: block;
          border-radius: 4px;
        }
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
        .movie-content {
          padding: 0px 12px;
        }
        .release-date,
        .movie-grade {
          margin: 0px;
          padding: 0px;
          font-family: "Open Sans", sans-serif;
          font-size: 12px;
          color: #818181;
          width: auto;
          display: block;
          float: left;
          margin-right: 6px;
          font-weight: 600;
        }
        .release-date {
          margin: 5px 0;
        }
        .movie-grade {
          float: right;
          color: #fe4141;
          font-size: 16px;
        }
        .movie-details {
          font-family: "Open Sans", sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #b4b4b4;
        }
        .movie-title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .movie-description {
          font-family: "Open Sans", sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #9b9b9b;
          text-align: justify;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .movie-actions,
        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
        }
        .action-row {
          margin-top: 24px;
        }
        .watch-btn {
          display: block;
          border: 1px solid #fe4141;
          border-radius: 5px;
          padding: 4px 8px;
          width: 160px;
        }
        .watch-btn i {
          font-size: 14px;
          margin-right: 2px;
          position: relative;
          float: left;
          line-height: 1;
        }
      `}</style>
    </div>
  );
};

export default MovieCard;
