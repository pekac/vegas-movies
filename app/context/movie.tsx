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

const SearchMovies = gql`
  query SearchMovies($query: String!) {
    movies(where: { title: { _like: $query } }) {
      backdrop: backdrop_path
      id
      lang: original_language
      overview
      imgSrc: poster_path
      releaseDate: release_date
      title
      rating: vote_average
      voteCount: vote_count
      isFavorite: is_favorite
      onWatchlist: on_watchlist
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
