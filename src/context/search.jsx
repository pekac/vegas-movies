import React, { useContext, useEffect, useState } from "react";

import { MoviesContext } from "./movies";

import MovieService from "@services/movie";

import { debounce } from "@lib/utils";

export const SearchContext = React.createContext(null);

const SearchProvider = ({ children }) => {
  const { setMovies } = useContext(MoviesContext);
  const [query, setQuery] = useState("");

  const search = debounce(async () => {
    const movies = await MovieService.getMovies({ query, page: 1 });
    setMovies(movies);
  }, 200);

  useEffect(() => {
    search();
  }, [query]);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
