import MovieList from "@components/movie-list";

import { db } from "@lib/graphql";
import { IMovie } from "@models/movie";

import { GetMovies } from "@queries/movies";

async function IndexPage() {
  const { movies } = await db.request(GetMovies) as {movies: IMovie[]};
  return <MovieList movies={movies} />;
}

export default IndexPage;
