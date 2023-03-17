import MovieCard from "@components/movie-card";
import NoResults from "@components/no-result";

import { useMovies } from "@context/movie";

import { IMovie, MOVIE_LIST_TYPE } from "@models/movie";
import { useMemo } from "react";

export interface Props {
  type: MOVIE_LIST_TYPE;
}

function MovieList({ type }: Props) {
  const { movies } = useMovies();
  const list: IMovie[] = useMemo(() => {
    switch (type) {
      case "all": {
        return movies;
      }
      case "favorites": {
        return movies.filter((m) => m.isFavorite);
      }
      case "watchlist": {
        return movies.filter((m) => m.onWatchlist);
      }
      default: {
        return [];
      }
    }
  }, [movies, type]);

  if (list.length === 0) {
    return <NoResults />;
  }

  return (
    <>
      {list.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default MovieList;
