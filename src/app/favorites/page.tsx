import MovieCard from "@components/movie-card";
import NoResults from "@components/no-result";

import { DAILY_IN_SECONDS as DAILY } from "@constants/periods";

import AccountService from "@services/account";

async function FavoritesPage() {
  const movies = await AccountService.getFavorites({
    page: 1,
    fetchOptions: { next: { revalidate: DAILY } },
  });

  if (!movies || movies?.length === 0) {
    return <NoResults />;
  }

  return movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
}

export default FavoritesPage;