"use client";

import { createContext, useContext, useState } from "react";

import { db } from "@lib/graphql";
import { debounce } from "@lib/utils";

import { IMovie } from "@models/movie";

import { SearchMovies, UpdateWatchlistStatus } from "@queries/movies";

export interface IMoviesContext {
  movies: IMovie[];
  search: (query: string) => Promise<void>;
  updateWatchlistStatus: (id: number, onWatchlist: boolean) => Promise<void>;
}

export interface Props {
  allMovies: IMovie[];
  children: React.ReactNode;
}

const MoviesContext = createContext<IMoviesContext>({} as IMoviesContext);

function MoviesProvider({ allMovies, children }: Props) {
  const [movies, setMovies] = useState<IMovie[]>(allMovies);

  const updateWatchlistStatus = async (
    id: number,
    onWatchlist: boolean
  ): Promise<void> => {
    try {
      // @ts-ignore
      const { update_movies_by_pk: movie } = await db.request(
        UpdateWatchlistStatus,
        {
          id,
          onWatchlist: !onWatchlist,
        }
      );
      const index = movies.findIndex((m) => m.id === movie.id);
      setMovies([
        ...movies.slice(0, index),
        { ...movies[index], ...movie },
        ...movies.slice(index + 1, movies.length),
      ]);
    } catch (e) {}
  };

  const search = async (query: string = ""): Promise<void> => {
    // @ts-ignore
    const { movies } = await db.request(SearchMovies, {
      query: `%${query}%`,
    });
    setMovies(movies);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        search: debounce(search, 200),
        updateWatchlistStatus,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const ctx = useContext(MoviesContext);

  if (ctx == null) {
    throw new Error("useMovies must be used within MoviesProvider");
  }

  return ctx;
}

export default MoviesProvider;
