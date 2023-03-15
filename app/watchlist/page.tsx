import MovieCard from "@/app/components/movie-card";
import NoResults from "@/app/components/no-result";

import { db } from "@lib/graphql";

import { GetWatchlist } from "@queries/movies";

async function WatchlistPage() {
  // @ts-ignore
  const { movies } = await db.request(GetWatchlist);

  if (!movies || movies?.length === 0) {
    return <NoResults />;
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default WatchlistPage;
