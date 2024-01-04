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
    <div className="p-5 w-auto grid grid-cols-4 grid-rows-5 gap-6">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}

export default MovieList;
