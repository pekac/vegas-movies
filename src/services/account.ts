import { buildQuery } from "@lib/http";

import { IAccount } from "@models/account";
import { IMovie, IPaginatedMovies } from "@models/movie";
import { IOptions } from "@models/resource";

const SERVICE_URI = "/account";

async function getAccountId(): Promise<number> {
  const uri = buildQuery(SERVICE_URI);
  const res = await fetch(uri);
  const account: IAccount = await res.json();
  return account.id;
}

async function getFavorites({
  page = 1,
  fetchOptions = {},
}: {
  page: number;
  fetchOptions: IOptions;
}): Promise<IMovie[]> {
  const id = await getAccountId();
  const uri = buildQuery(`${SERVICE_URI}/${id}/favorite/movies`, { page });
  const res = await fetch(uri, { ...fetchOptions });
  const favs: IPaginatedMovies = await res.json();
  return favs.results;
}

async function markFavorite(
  movieId: number,
  isFavorite: boolean
): Promise<void> {
  const id = await getAccountId();
  const uri = buildQuery(`${SERVICE_URI}/${id}/favorite/movies`);
  await fetch(uri, {
    method: "POST",
    body: JSON.stringify({
      media_type: "movie",
      media_id: movieId,
      favorite: isFavorite,
    }),
  });
}

async function getWatchlist({
  page = 1,
  fetchOptions = {},
}: {
  page: number;
  fetchOptions: IOptions;
}): Promise<IMovie[]> {
  const id = await getAccountId();
  const uri = buildQuery(`${SERVICE_URI}/${id}/watchlist/movies`, { page });
  const res = await fetch(uri, { ...fetchOptions });
  const favs: IPaginatedMovies = await res.json();
  return favs.results;
}

async function addToWatchlist(movieId: number, onWatchlist: boolean) {
  const id = await getAccountId();
  const uri = buildQuery(`${SERVICE_URI}/${id}/watchlist`);
  await fetch(uri, {
    method: "POST",
    body: JSON.stringify({
      media_type: "movie",
      media_id: movieId,
      watchlist: onWatchlist,
    }),
  });
}

export default {
  addToWatchlist,
  getFavorites,
  getWatchlist,
  markFavorite,
};
