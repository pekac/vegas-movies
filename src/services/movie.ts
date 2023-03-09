import fetch from "isomorphic-unfetch";

import { BASE_URL, API_KEY } from "@constants/api";

import { IMovie } from "@models/movie";

function buildQuery(uri: string, params: {} = {}) {
  const temp = new URLSearchParams(params).toString();
  const queryParams = temp.length > 0 ? `&${temp}` : "";
  return `${BASE_URL}${uri}?api_key=${API_KEY}&language=en-US${queryParams}`;
}

function getMovies(query: string = "", page: number = 1): Promise<IMovie[]> {
  if (query.length === 0) {
    return getTopRatedMovies(page);
  }

  return searchMovies(query, page);
}

async function getTopRatedMovies(page: number = 1): Promise<IMovie[]> {
  const uri = buildQuery("/movie/top_rated", { page });
  const res = await fetch(uri);
  const { results = [] } = await res.json();
  return results;
}

async function searchMovies(
  query: string = "",
  page: number = 1
): Promise<IMovie[]> {
  const uri = buildQuery("/search/movie", {
    query,
    page,
    include_adult: false,
  });
  const res = await fetch(uri);
  const { results = [] } = await res.json();
  return results;
}

async function getVideoSrcForMovie(id: number = 1): Promise<string> {
  const uri = buildQuery(`/movie/${id}/videos`);
  const res = await fetch(uri);
  const { results = [] } = await res.json();
  return results.length > 0 ? results[0] : null;
}

export default {
  getMovies,
  getTopRatedMovies,
  searchMovies,
  getVideoSrcForMovie,
};
