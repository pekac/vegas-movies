import React from "react";

import PageLayout from "@components/page-layout";
import MovieCard from "@components/movie-card/";
import NoResults from "@components/no-result/";

const FavoritesPage = ({
  favorites,
  watchLater,
  showTrailer,
  updateFavs,
  updateWatchLater,
}) => (
  <>
    {favorites.length === 0 && <NoResults />}
    {favorites.map((movie) => (
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

FavoritesPage.PageLayout = PageLayout;

export default FavoritesPage;
