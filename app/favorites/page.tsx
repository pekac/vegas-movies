import MovieList from "@components/movie-list";

import { db } from "@lib/graphql";

import { IMovie } from "@models/movie";

import { GetFavorites } from "@queries/movies";

async function FavoritesPage() {
  const { movies } = (await db.request(GetFavorites)) as { movies: IMovie[] };
  return <MovieList movies={movies} />;
}

export default FavoritesPage;
