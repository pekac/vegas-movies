import MovieCard from "@components/movie-card";
import NoResults from "@components/no-result";

import MovieService from "@services/movie";

async function IndexPage() {
  const movies = await MovieService.getTopRatedMovies({
    page: 1,
  });

  if (movies.length === 0) {
    return <NoResults />;
  }

  return movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
}

export default IndexPage;
