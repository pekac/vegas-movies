import MovieCard from "@/app/components/movie-card";
import NoResults from "@/app/components/no-result";

import { gql, db } from "@lib/graphql";

async function WatchlistPage() {
  // @ts-ignore
  const { movies } = await db.request(GetMovies);

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

const GetMovies = gql`
  query GetMovies {
    movies {
      backdrop_path
      id
      original_language
      overview
      poster_path
      release_date
      title
      vote_average
      vote_count
      on_watchlist
      is_favorite
    }
  }
`;

export default WatchlistPage;
