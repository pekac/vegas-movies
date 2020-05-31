import React from "react";
/* components */
import MovieCard from "../components/movie-card/";
import NoResults from "../components/no-result/";
import PageWrapper from "../components/page-wrapper";

const Home = ({
  movies,
  favorites,
  watchLater,
  updateFavs,
  updateWatchLater,
  showTrailer,
}) => (
  <PageWrapper>
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
  </PageWrapper>
);

export default Home;
