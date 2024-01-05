import { MovieList } from "@components/movie";

import { db } from "@lib/db";

import { IMovie } from "@models/movie";

import { GetWatchlistQuery } from "@queries/movies";

export const dynamic = "force-dynamic";
export const runtime = "edge";

async function WatchlistPage() {
  const { movies } = (await db({
    query: GetWatchlistQuery,
    tags: ["watchlist"],
  })) as {
    movies: IMovie[];
  };
  return <MovieList movies={movies} />;
}

export default WatchlistPage;
