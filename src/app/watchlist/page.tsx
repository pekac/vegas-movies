import { MovieList } from "@components/movie";

import { db } from "@lib/graphql";

import { IMovie } from "@models/movie";

import { GetWatchlistQuery } from "@queries/movies";

export const dynamic = "force-dynamic";
export const runtime = "edge";

async function WatchlistPage() {
  const res = await db({ query: GetWatchlistQuery, tags: ["watchlist"] });
  const json = await res.json();
  return <MovieList movies={json.data.movies} />;
}

export default WatchlistPage;
