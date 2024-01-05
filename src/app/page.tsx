/* components */
import { MovieList } from "@components/movie";
/* lib */
import { db } from "@lib/db";
/* models */
import { IMovie } from "@models/movie";
/* queries */
import { SearchMoviesQuery } from "@queries/movies";

export const dynamic = "force-dynamic";
export const runtime = "edge";

async function IndexPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue = "" } = searchParams as { [key: string]: string };
  const { movies } = (await db({
    query: SearchMoviesQuery,
    tags: ["home"],
    variables: { query: `%${searchValue}%` },
  })) as { movies: IMovie[] };

  return <MovieList movies={movies} />;
}

export default IndexPage;
