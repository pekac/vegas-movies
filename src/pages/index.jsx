import React from "react";

import MovieList from "@components/movie-card/list";
import PageLayout from "@components/page-layout";

import { DAILY_IN_SECONDS as DAILY } from "@constants/periods";

import MovieService from "@services/movie-service";

const IndexPage = ({ movies }) => <MovieList movies={movies} />;

export async function getStaticProps() {
  const movies = await MovieService.getTopRatedMovies({ page: 1 });
  return {
    props: {
      movies,
      revalidate: DAILY,
    },
  };
}

IndexPage.PageLayout = PageLayout;

export default IndexPage;
