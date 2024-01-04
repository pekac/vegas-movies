"use client";

import { createContext, useContext } from "react";

import { db } from "@lib/graphql";

import { UpdateWatchlistStatus } from "@queries/movies";

export interface IMoviesContext {
  updateWatchlistStatus: (id: number, onWatchlist: boolean) => Promise<void>;
}

export interface Props {
  children: React.ReactNode;
}

const MoviesContext = createContext<IMoviesContext>({} as IMoviesContext);

function MoviesProvider({ children }: Props) {
  async function updateWatchlistStatus(
    id: number,
    onWatchlist: boolean
  ): Promise<void> {
    try {
      await db.request(UpdateWatchlistStatus, {
        id,
        onWatchlist: !onWatchlist,
      });
    } catch (e) {}
  }

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
