import React, { useContext, useEffect } from "react";

import MovieList from "@components/movie-card/list";

import { MoviesContext } from "@context/movies";
import { SearchContext } from "@context/search";

import { DAILY_IN_SECONDS as DAILY } from "@constants/periods";

import MovieService from "@services/movie-service";

const IndexPage = ({ topMovies }) => {
  const { query } = useContext(SearchContext);
  const { movies, setMovies } = useContext(MoviesContext);

  useEffect(() => {
    const list = query.length > 0 ? movies : topMovies;
    setMovies(list);
  }, []);

  return <MovieList movies={movies} />;
};

export async function getStaticProps() {
  const topMovies = await MovieService.getTopRatedMovies({ page: 1 });
  return {
    props: {
      topMovies,
      revalidate: DAILY,
    },
  };
}

export default IndexPage;
