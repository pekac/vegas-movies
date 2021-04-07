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

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        update,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
