import fetch from "isomorphic-unfetch";

import { BASE_URL, API_KEY } from "@constants/api";

import { IMovie } from "@models/movie";

function getMovies(query: string = "", page: number = 1): Promise<IMovie[]> {
  if (query.length === 0) {
    return getTopRatedMovies(page);
  }

  return searchMovies(query, page);
}

async function getTopRatedMovies(page: number = 1): Promise<IMovie[]> {
  const res = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const { results = [] } = await res.json();
  return results;
}

async function searchMovies(
  query: string = "",
  page: number = 1
): Promise<IMovie[]> {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  const { results = [] } = await res.json();
  return results;
}

async function getVideoSrcForMovie(id: number = 1): Promise<string> {
  const res = await fetch(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  );
  const { results = [] } = await res.json();
  return results.length > 0 ? results[0] : null;
}

export default {
  getMovies,
  getTopRatedMovies,
  searchMovies,
  getVideoSrcForMovie,
};
