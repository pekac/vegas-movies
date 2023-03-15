"use client";

import { createContext, useContext, useState } from "react";

import { gql, db } from "@lib/graphql";

import { IMovie } from "@models/movie";
import { debounce } from "@lib/utils";

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
    const { moviesByTitle } = await db.request(SearchMovies, {
      query,
    });
    const { data: movies } = moviesByTitle;
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

const SearchMovies = gql`
  query SearchMovies($query: String!) {
    moviesByTitle(original_title: match: { terms: Split($query, ""), casefold: true }) {
      data {
        id
        is_favorite
        original_title
        overview
        poster_path
        release_date
        vote_average
        watchlist
      }
    }
  }
`;

export function useMovies() {
  const ctx = useContext(MoviesContext);

  if (ctx == null) {
    throw new Error("useMovies must be used within MoviesProvider");
  }

  return ctx;
}

export default MoviesProvider;
