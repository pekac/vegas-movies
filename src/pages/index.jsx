import React from "react";

import MovieList from "@components/movie-card/list";
import PageLayout from "@components/page-layout";

import MovieManagement from "@model/movie-management";

const IndexPage = ({ movies }) => <MovieList movies={movies} />;

export async function getStaticProps() {
  const movies = await MovieManagement.getMovies();
  return {
    props: {
      movies,
    },
  };
}

IndexPage.PageLayout = PageLayout;

export default IndexPage;
