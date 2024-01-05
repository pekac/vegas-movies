/* components */
import { MovieList } from "@components/movie";
/* lib */
import { db } from "@lib/db";
/* models */
import { IMovie } from "@models/movie";
/* queries */
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
