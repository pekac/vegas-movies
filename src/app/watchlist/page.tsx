import { MovieList } from "@components/movie";

import { db } from "@lib/graphql";

import { IMovie } from "@models/movie";

import { GetWatchlist } from "@queries/movies";

async function WatchlistPage() {
  const { movies } = (await db.request(GetWatchlist)) as { movies: IMovie[] };
  return <MovieList movies={movies} />;
}

export default WatchlistPage;
