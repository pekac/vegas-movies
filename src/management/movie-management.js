/* utils */
import { findItemInList } from "@lib/utils";
/* services */
import MovieService from "../services/movie-service";

const getMovies = async (query = "") => {
  if (query === "") {
    const { results } = await MovieService.getTopRatedMovies({ page: 1 });
    return results;
  }

  const { results } = await MovieService.searchMovies({
    query,
    page: 1,
  });
  return results;
};

const getTrailerForMovie = async (movie) => {
  const { results } = await MovieService.getVideoForMovie({
    movieId: movie.id,
  });
  return results.length > 0 ? results[0] : null;
};

export default {
  updateList,
  removeFromList,
  getMovies,
  getTrailerForMovie,
};
