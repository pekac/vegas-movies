import React from "react";

import NoResults from "@components/no-result";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <NoResults />;
  }

  return movies.map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      favorites={favorites}
      watchLater={watchLater}
      updateFavs={updateFavs}
      updateWatchLater={updateWatchLater}
      showTrailer={showTrailer}
    />
  ));
};

export default MovieList;
