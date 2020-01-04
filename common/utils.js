export const findMovieIndexInList = (list, movie) =>
  list.findIndex(m => m.id === movie.id);
