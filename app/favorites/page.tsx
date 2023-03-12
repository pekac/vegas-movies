import MovieCard from "@/app/components/movie-card";
import NoResults from "@/app/components/no-result";

async function FavoritesPage() {
  // const movies = [];

  // if (!movies || movies?.length === 0) {
  return <NoResults />;
  // }

  // return movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
}

export default FavoritesPage;
