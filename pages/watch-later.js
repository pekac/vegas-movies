import React from "react";
/* components */
import MovieCard from "../components/movie-card/";
import NoResults from "../components/no-result/";
import PageWrapper from "../components/page-wrapper";

const WatchLater = ({ watchLater, favorites, showTrailer }) => (
  <PageWrapper>
    {watchLater.length === 0 && <NoResults />}
    {watchLater.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        favorites={favorites}
        watchLater={watchLater}
        showTrailer={showTrailer}
      />
    ))}
  </PageWrapper>
);

export default WatchLater;
