"use client";

import MovieCard from "@components/movie-card";
import NoResults from "@components/no-result";

import { IMovie } from "@models/movie";

export interface Props {
  movies: IMovie[];
}

function MovieList({ movies }: Props) {
  if (movies.length === 0) {
    return <NoResults />;
  }

  return (
    <>
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </>
  );
}

export default MovieList;
