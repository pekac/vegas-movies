"use client";

import { createContext, useContext } from "react";

import { db } from "@lib/graphql";

import { SearchMovies, UpdateWatchlistStatus } from "@queries/movies";

export interface IMoviesContext {
  updateWatchlistStatus: (id: number, onWatchlist: boolean) => Promise<void>;
}

export interface Props {
  children: React.ReactNode;
}

const MoviesContext = createContext<IMoviesContext>({} as IMoviesContext);

function MoviesProvider({ children }: Props) {
  const updateWatchlistStatus = async (
    id: number,
    onWatchlist: boolean
  ): Promise<void> => {
    try {
      await db.request(UpdateWatchlistStatus, {
        id,
        onWatchlist: !onWatchlist,
      });
    } catch (e) {}
  };

  const search = async (query: string = ""): Promise<void> => {
    // @ts-ignore
    const { movies } = await db.request(SearchMovies, {
      query: `%${query}%`,
    });
  };

  return (
    <MoviesContext.Provider
      value={{
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
