import React, { useContext, useEffect, useState } from "react";

import MovieActions from "./actions";
import MovieContent from "./content";
import MovieLayout from "./layout";
import MoviePoster from "./poster";

import { TrailerContext } from "@context/trailer";
import { WatchLaterContext } from "@context/watch-later";

const MovieCard = ({ movie }) => {
  const [isSavedMovie, setIsSaved] = useState(false);

  const { getTrailer } = useContext(TrailerContext);

  const { savedMovies, isSaved, update: updateSaved } = useContext(
    WatchLaterContext
  );

  useEffect(() => {
    const isSavedMovie = isSaved(movie);
    setIsSaved(isSavedMovie);
  }, [savedMovies]);

  const toggleWatchLater = () => updateSaved(movie);
  const showTrailer = () => getTrailer(movie);

  return (
    <>
      <MovieLayout>
        <MoviePoster movie={movie} />
        <div className="movie-content">
          <MovieContent movie={movie} />
          <MovieActions movie={movie} />
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
