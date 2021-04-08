import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
