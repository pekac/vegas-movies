"use client";

import { createContext, useContext, useState } from "react";

import { db } from "@lib/graphql";
import { debounce } from "@lib/utils";

import { IMovie } from "@models/movie";

import { SearchMovies } from "@queries/movies";

export interface IMoviesContext {
  movies: IMovie[];
  markFavorite: (id: number) => Promise<void>;
  search: (query: string) => Promise<void>;
}

export interface Props {
  allMovies: IMovie[];
  children: React.ReactNode;
}

const MoviesContext = createContext<IMoviesContext>({} as IMoviesContext);

function MoviesProvider({ allMovies, children }: Props) {
  const [movies, setMovies] = useState<IMovie[]>(allMovies);

  const markFavorite = async (id: number): Promise<void> => {};

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
        markFavorite,
        search: debounce(search, 200),
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
