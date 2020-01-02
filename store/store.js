const store = {
  watchLater: [],
  favorites: []
};

const getFavs = () => store.favorites;

const updateFavs = movie => {
  const index = findMovieIndexInList(store.favorites, movie);
  if (index < 0) {
    store.favorites.push(movie);
  } else {
    removeFromFavs(index);
  }
};

const removeFromFavs = index => store.favorites.splice(index, 1);

const getWatchLater = () => store.watchLater;

const updateWatchLater = movie => {
  const index = findMovieIndexInList(store.watchLater, movie);
  if (index < 0) {
    store.watchLater.push(movie);
  } else {
    removeFromWatchLater(index);
  }
};

const removeFromWatchLater = index => store.watchLater.splice(index, 1);

const findMovieIndexInList = (list, movie) =>
  list.findIndex(m => m.id === movie.id);

export default {
  getFavs,
  updateFavs,

  getWatchLater,
  updateWatchLater
};
