/* utils */
import { findMovieIndexInList } from "../common/utils";
/* services */
import MovieService from "../services/movie-service";

const updateList = (list, movie) => {
  const index = findMovieIndexInList(list, movie);
  if (index < 0) {
    list.push(movie);
    return list;
  } else {
    return removeFromList(list, index);
  }
};

const removeFromList = (list, index) => {
  list.splice(index, 1);
  return list;
};

const getMovies = async (query = "") => {
  if (query === "") {
    const { results } = await MovieService.getTopRatedMovies({ page: 1 });
    return results;
  }

  const { results } = await MovieService.searchMovies({
    query,
    page: 1
  });
  return results;
};

const getTrailerForMovie = async movie => {
  const { results } = await MovieService.getVideoForMovie({
    movieId: movie.id
  });
  return results.length > 0 ? results[0] : null;
};

export default {
  updateList,
  removeFromList,
  getMovies,
  getTrailerForMovie
};
