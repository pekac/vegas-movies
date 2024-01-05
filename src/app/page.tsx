import { MovieList } from "@components/movie";

import { db } from "@lib/graphql";

import { IMovie } from "@models/movie";

import { SearchMoviesQuery } from "@queries/movies";

export const dynamic = "force-dynamic";
export const runtime = "edge";

async function IndexPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue = "" } = searchParams as { [key: string]: string };
  // @ts-ignore
  const res = await db({
    query: SearchMoviesQuery,
    tags: ["home"],
    variables: { query: `%${searchValue}%` },
  });
  const json = await res.json();

  console.log("PERA::::", json.data.movies);
  return <MovieList movies={json.data.movies} />;
}

export default IndexPage;
