import React, { useContext } from "react";

import MovieList from "@components/movie-card/list";

import { WatchLaterContext } from "@context/watch-later";

const WatchLaterPage = () => {
  const { savedMovies } = useContext(WatchLaterContext);
  return <MovieList movies={savedMovies} />;
};

export default WatchLaterPage;
