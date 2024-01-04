"use client";

import { MovieCard, NoResults } from "@components/movie";

import { IMovie } from "@models/movie";

export interface IMovieList {
  movies: IMovie[];
}

export function MovieList({ movies }: IMovieList) {
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