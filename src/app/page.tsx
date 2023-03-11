import MovieCard from "@components/movie-card";
import NoResults from "@components/no-result";

import { gql, db } from "@lib/graphql";

async function IndexPage() {
  // @ts-ignore
  const { allMovies } = await db.request(GetAllMovies, {
    first: 20,
  });
  const { data: movies } = allMovies;

  if (movies.length === 0) {
    return <NoResults />;
  }

  return movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
}

const GetAllMovies = gql`
  query GetAllMovies($first: Int!) {
    allMovies(_size: $first) {
      data {
        id
        is_favorite
        original_title
        overview
        poster_path
        release_date
        vote_average
        watchlist
      }
    }
  }
`;

export default IndexPage;
