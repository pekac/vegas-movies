import React, { useContext } from "react";

import MovieList from "@components/movie-card/list";
import PageLayout from "@components/page-layout";

import { WatchLaterContext } from "@context/watch-later";

const WatchLaterPage = () => {
  const { savedMovies } = useContext(WatchLaterContext);
  return <MovieList movies={savedMovies} />;
};

WatchLaterPage.PageLayout = PageLayout;

export default WatchLaterPage;
