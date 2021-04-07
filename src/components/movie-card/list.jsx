import React from "react";

import NoResults from "@components/no-result";
import MovieCard from "@components/movie-card";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <NoResults />;
  }

  return movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
};

export default MovieList;
