import fetch from "isomorphic-unfetch";

import { buildQuery } from "@lib/http";

import { IMovie } from "@models/movie";

const SERVICE_URI = "/movie";

// function getMovies(query: string = "", page: number = 1): Promise<IMovie[]> {
//   if (query.length === 0) {
//     return getTopRatedMovies(page);
//   }

//   return searchMovies(query, page);
// }

async function getTopRatedMovies(page: number = 1): Promise<IMovie[]> {
  const uri = buildQuery(`${SERVICE_URI}/top_rated`, { page });
  const res = await fetch(uri);
  const { results = [] } = await res.json();
  return results;
}

async function getVideoSrcForMovie(id: number = 1): Promise<string> {
  const uri = buildQuery(`${SERVICE_URI}/${id}/videos`);
  const res = await fetch(uri);
  const { results = [] } = await res.json();
  return results.length > 0 ? results[0] : null;
}

export default {
  getTopRatedMovies,
  getVideoSrcForMovie,
};
