import React, { useState } from "react";

import FavoritesManagement from "@management/favorites-management";

export const FavoritesContext = React.createContext(null);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const FavManagement = new FavoritesManagement(favorites);

  const update = (movie) => {
    const favorites = FavManagement.update(movie);
    setFavorites(favorites);
  };

  const isFavorite = (movie) => FavManagement.isInList(movie);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        update,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
