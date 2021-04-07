import React from "react";

import MovieList from "@components/movie-card/list";
import PageLayout from "@components/page-layout";

const WatchLaterPage = () => {
  return <MovieList movies={[]} />;
};

WatchLaterPage.PageLayout = PageLayout;

export default WatchLaterPage;
