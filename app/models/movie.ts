export interface IMovie {
  backdrop: string | null;
  id: number;
  lang: string;
  overview: string;
  releaseDate: string;
  imgSrc: string | null;
  title: string;
  rating: number;
  voteCount: number;
  isFavorite: boolean;
  onWatchlist: boolean;
}

export interface IPaginatedMovies {
  page: number;
  results: IMovie[];
}
