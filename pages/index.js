import React from "react";
/* components */
import MovieCard from "../components/movie-card";

/* services */
import MovieService from "../services/movie-service";

const Home = props => (
  <div className="container">
    {props.results.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

Home.getInitialProps = async () => {
  const props = await MovieService.getTopRatedMovies({ page: 1 });
  return props;
};

export default Home;
