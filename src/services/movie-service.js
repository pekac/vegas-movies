import fetch from "isomorphic-unfetch";

import { BASE_URL, API_KEY } from "@constants/api";

const getTopRatedMovies = async ({ page = 1 }) => {
  const res = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const { results = [] } = await res.json();
  return results;
};

const searchMovies = async ({ query = "", page = 1 }) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  const { results = [] } = await res.json();
  return results;
};

const getVideoForMovie = async ({ movieId = 1 }) => {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
  );
  const { results = [] } = await res.json();
  return results.length > 0 ? results[0] : null;
};

export default {
  getTopRatedMovies,
  searchMovies,
  getVideoForMovie,
};
