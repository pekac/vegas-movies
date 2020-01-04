import React from "react";
/* components */
import MovieCard from "../components/movie-card/";

const Home = ({ movies, favorites, updateFavs, updateWatchLater }) => (
  <div className="container">
    {movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        favorites={favorites}
        updateFavs={updateFavs}
        updateWatchLater={updateWatchLater}
      />
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
      }
    `}</style>
  </div>
);

export default Home;
