import React from "react";

import MovieList from "@components/movie-card/list";
import PageLayout from "@components/page-layout";

import { DAILY_IN_SECONDS as DAILY } from "@constants/periods";

import MovieManagement from "@management/movie-management";

const IndexPage = ({ movies }) => <MovieList movies={movies} />;

export async function getStaticProps() {
  const movies = await MovieManagement.getMovies();
  return {
    props: {
      movies,
      revalidate: DAILY,
    },
  };
}

IndexPage.PageLayout = PageLayout;

export default IndexPage;
