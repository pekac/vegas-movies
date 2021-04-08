import React, { useState } from "react";

import WatchLaterManagement from "@management/watch-later-management";

export const WatchLaterContext = React.createContext(null);

const WatchLaterProvider = ({ children }) => {
  const [savedMovies, setSavedMovies] = useState([]);
  const SavedManagement = new WatchLaterManagement(savedMovies);

  const update = (movie) => {
    const favorites = SavedManagement.update(movie);
    setSavedMovies([...favorites]);
  };

  const isSaved = (movie) => SavedManagement.isInList(movie);

  return (
    <WatchLaterContext.Provider
      value={{
        savedMovies,
        update,
        isSaved,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export default WatchLaterProvider;
