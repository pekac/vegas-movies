import { gql } from "graphql-request";

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

export const GetMoviesQuery = gql`
  query GetMovies {
    movies(order_by: { title: desc }) {
      ...MovieFragment
    }
  }
  ${MovieFragment}
`;

export const GetWatchlistQuery = gql`
  query GetWatchlistMovies {
    movies(where: { on_watchlist: { _eq: true } }, order_by: { title: desc }) {
      ...MovieFragment
    }
  }
  ${MovieFragment}
`;

export const SearchMoviesQuery = gql`
  query SearchMovies($query: String!) {
    movies(where: { title: { _ilike: $query } }, order_by: { title: desc }) {
      ...MovieFragment
    }
  }
  ${MovieFragment}
`;

export const UpdateWatchlistMutation = gql`
  mutation UpdateWatchlistStatus($id: smallint!, $onWatchlist: Boolean!) {
    update_movies_by_pk(
      pk_columns: { id: $id }
      _set: { on_watchlist: $onWatchlist }
    ) {
      id
      onWatchlist: on_watchlist
    }
  }
`;
