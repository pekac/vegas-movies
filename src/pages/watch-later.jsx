import React from "react";

import MovieCard from "@components/movie-card";
import NoResults from "@components/no-result";
import PageLayout from "@components/page-layout";

const WatchLaterPage = ({
  watchLater,
  favorites,
  showTrailer,
  updateFavs,
  updateWatchLater,
}) => (
  <>
    {watchLater.length === 0 && <NoResults />}
    {watchLater.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        favorites={favorites}
        watchLater={watchLater}
        showTrailer={showTrailer}
        updateFavs={updateFavs}
        updateWatchLater={updateWatchLater}
      />
    ))}
  </>
);

WatchLaterPage.PageLayout = PageLayout;

export default WatchLaterPage;
