"use client";
/* components */
import { MovieCard, NoResults } from "@components/movie";
/* models */
import { IMovie } from "@models/movie";

export interface IMovieList {
  movies: IMovie[];
}

export function MovieList({ movies }: IMovieList) {
  if (movies.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="p-5 w-auto grid grid-cols-1 sm2:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-5 gap-6">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}
