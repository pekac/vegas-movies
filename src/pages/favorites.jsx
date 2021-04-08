import React, { useContext } from "react";

import MovieList from "@components/movie-card/list";

import { FavoritesContext } from "@context/favorites";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  return <MovieList movies={favorites} />;
};

export default FavoritesPage;
