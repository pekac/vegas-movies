import { buildQuery } from "@lib/http";

import { IMovie } from "@models/movie";
import { IOptions } from "@models/http";

const SERVICE_URI = "/movie";

async function getTopRatedMovies({
  page = 1,
  fetchOptions = {},
}: {
  page: number;
  fetchOptions?: IOptions;
}): Promise<IMovie[]> {
  const uri = buildQuery(`${SERVICE_URI}/top_rated`, { page });
  const res = await fetch(uri, { ...fetchOptions });
  const { results = [] } = await res.json();
  return results;
}

async function getVideoSrcById(id: number = 1): Promise<string> {
  const uri = buildQuery(`${SERVICE_URI}/${id}/videos`);
  const res = await fetch(uri);
  const { results = [] } = await res.json();
  return results.length > 0 ? results[0] : null;
}

export default {
  getTopRatedMovies,
  getVideoSrcById,
};
