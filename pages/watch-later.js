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
  return {
    movies: Store.getWatchLater()
  };
};

export default WatchLater;
