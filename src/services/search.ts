import { buildQuery } from "@lib/http";

import { IMovie } from "@models/movie";

const SERVICE_URI = "/search";

async function searchMovies(
  query: string = "",
  page: number = 1
): Promise<IMovie[]> {
  const uri = buildQuery(`${SERVICE_URI}/movie`, {
    query,
    page,
    include_adult: false,
  });
  const res = await fetch(uri);
  const { results = [] } = await res.json();
  return results;
}

export default {
  searchMovies,
};
