import React from "react";
/* components */
import MovieCard from "../components/movie-card";
import NoResults from "../components/no-results";

const WatchLater = ({ watchLater, favorites }) => (
  <div className="container">
    {watchLater.length === 0 && <NoResults />}
    {watchLater.map(movie => (
      <MovieCard key={movie.id} movie={movie} favorites={favorites} />
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

export default WatchLater;
