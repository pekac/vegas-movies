import React from "react";

import MovieCard from "@components/movie-card";
import NoResults from "@components/no-result";
import PageLayout from "@components/page-layout";

const IndexPage = ({
  movies,
  favorites,
  watchLater,
  updateFavs,
  updateWatchLater,
  showTrailer,
}) => (
  <>
    {movies.length === 0 && <NoResults />}
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        favorites={favorites}
        watchLater={watchLater}
        updateFavs={updateFavs}
        updateWatchLater={updateWatchLater}
        showTrailer={showTrailer}
      />
    ))}
  </>
);

IndexPage.PageLayout = PageLayout;

export default IndexPage;
