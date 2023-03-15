import { gql } from "@lib/graphql";

const MovieFragment = gql`
  fragment MovieFragment on movies {
    backdrop: backdrop_path
    id
    lang: original_language
    overview
    imgSrc: poster_path
    releaseDate: release_date
    title
    rating: vote_average
    voteCount: vote_count
    isFavorite: is_favorite
    onWatchlist: on_watchlist
  }
`;

export const GetMovies = gql`
  query GetMovies {
    movies(order_by: { vote_average: desc }) {
      ...MovieFragment
    }
  }
  ${MovieFragment}
`;

export const GetWatchlist = gql`
  query GetWatchlistMovies {
    movies(where: { on_watchlist: { _eq: true } }) {
      ...MovieFragment
    }
  }
  ${MovieFragment}
`;

export const GetFavorites = gql`
  query GetFavorites {
    movies(where: { is_favorite: { _eq: true } }) {
      ...MovieFragment
    }
  }
  ${MovieFragment}
`;

export const SearchMovies = gql`
  query SearchMovies($query: String!) {
    movies(where: { title: { _like: $query } }) {
      ...MovieFragment
    }
  }
  ${MovieFragment}
`;
