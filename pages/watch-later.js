import React from "react";
/* components */
import MovieCard from "../components/movie-card";

/* services */
import Store from "../store/store";

const WatchLater = ({ movies }) => (
  <div className="container">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

WatchLater.getInitialProps = () => {
  return {
    movies: Store.getWatchLater()
  };
};

export default WatchLater;
