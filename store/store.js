const store = {
  watchLater: [],
  favorites: []
};

const getFavs = () => store.favorites;

const addToFavs = movie => store.favorites.push(movie);

const removeFromFavs = movie => {
  //remove
};

const getWatchLater = () => store.watchLater;

const addToWatchLater = movie => store.favorites.push(movie);

const removeFromWatchLater = movie => {
  //remove
};

export default {
  getFavs,
  addToFavs,
  removeFromFavs,

  getWatchLater,
  addToWatchLater,
  removeFromWatchLater
};
