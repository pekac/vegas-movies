import React, { useContext, useEffect, useState } from "react";

import MovieActions from "./actions";
import MovieContent from "./content";
import MovieLayout from "./layout";
import MoviePoster from "./poster";

import { TrailerContext } from "@context/trailer";
import { FavoritesContext } from "@context/favorites";
import { WatchLaterContext } from "@context/watch-later";

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
    <>
      <MovieLayout>
        <MoviePoster imgSrc={movie.poster_path} />
        <div className="movie-content">
          <MovieContent movie={movie} />
          <MovieActions />
        </div>
      </MovieLayout>
      <style jsx>{`
        .movie-content {
          padding: 0px 12px;
        }
      `}</style>
    </>
  );
};

export default MovieCard;
