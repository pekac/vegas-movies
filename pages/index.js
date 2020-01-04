import React from "react";
/* components */
import MovieCard from "../components/movie-card";

/* services */
import MovieService from "../services/movie-service";

const Home = ({ results, favorites, updateFavs, updateWatchLater }) => (
  <div className="container">
    {results.map(movie => (
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

Home.getInitialProps = async () => {
  const props = await MovieService.getTopRatedMovies({ page: 1 });
  return props;
};

export default Home;
