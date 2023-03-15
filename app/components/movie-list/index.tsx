"use client";

import MovieCard from "@components/movie-card";
import NoResults from "@components/no-result";

import { useMovies } from "@context/movie";

function MovieList() {
  const { movies } = useMovies();

  if (movies.length === 0) {
    return <NoResults />;
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default MovieList;
