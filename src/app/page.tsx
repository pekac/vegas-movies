import { MovieList } from "@components/movie";

import { db } from "@lib/graphql";

import { IMovie } from "@models/movie";

import { SearchMovies } from "@queries/movies";

async function IndexPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue = "" } = searchParams as { [key: string]: string };
  const { movies } = (await db.request(SearchMovies, {
    query: `%${searchValue}%`,
  })) as { movies: IMovie[] };

  return <MovieList movies={movies} />;
}

export default IndexPage;
