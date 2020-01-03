import React from "react";
/* components */
import MovieCard from "../components/movie-card";
import NoResults from "../components/no-results";
/* services */
import Store from "../store/store";

const WatchLater = ({ movies }) => (
  <div className="container">
    {movies.length === 0 && <NoResults />}
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
    <style jsx>{`
      .container {
        background: #1e1b26;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
        margin-top: 70px;
        width: 100%;
        color: #333;
        min-height: 100vh;
      }
    `}</style>
  </div>
);

WatchLater.getInitialProps = () => {
  const movies = Store.getWatchLater();
  return {
    movies
  };
};

export default WatchLater;
