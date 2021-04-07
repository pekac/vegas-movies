import React, { useContext } from "react";

import MovieList from "@components/movie-card/list";
import PageLayout from "@components/page-layout";

import { FavoritesContext } from "@context/favorites";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  return <MovieList movies={favorites} />;
};

FavoritesPage.PageLayout = PageLayout;

export default FavoritesPage;
