import React from "react";
/* components */
import PageWrapper from "../components/page-wrapper/";
import MovieCard from "../components/movie-card/";
import NoResults from "../components/no-result/";

const Favorites = ({ favorites, watchLater, showTrailer }) => (
  <PageWrapper>
    {favorites.length === 0 && <NoResults />}
    {favorites.map(movie => (
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

export default Favorites;
