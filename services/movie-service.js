import fetch from "isomorphic-unfetch";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "86587b6bca657caa380766ce8dc8906b";

const getTopRatedMovies = async ({ page = 1 }) => {
  const res = await fetch(
    `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const data = await res.json();
  return data;
};

export default {
  getTopRatedMovies
};
