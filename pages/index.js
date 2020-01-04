import React from "react";
/* components */
import MovieCard from "../components/movie-card/";
import NoResults from "../components/no-result/";
import PageWrapper from "../components/page-wrapper";

const Home = ({ movies, favorites, updateFavs, updateWatchLater }) => (
  <PageWrapper>
    {movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        favorites={favorites}
        updateFavs={updateFavs}
        updateWatchLater={updateWatchLater}
      />
    ))}
  </PageWrapper>
);

export default Home;
