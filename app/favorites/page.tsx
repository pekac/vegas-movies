import MovieCard from "@components/movie-card";
import NoResults from "@components/no-result";

import { db } from "@lib/graphql";

import { GetFavorites } from "@queries/movies";

async function FavoritesPage() {
  // @ts-ignore
  const { movies } = await db.request(GetFavorites);

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

export default FavoritesPage;
