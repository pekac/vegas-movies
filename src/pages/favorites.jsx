import React from "react";

import MovieList from "@components/movie-card/list";
import PageLayout from "@components/page-layout";

const FavoritesPage = () => {
  return <MovieList movies={[]} />;
};

FavoritesPage.PageLayout = PageLayout;

export default FavoritesPage;
