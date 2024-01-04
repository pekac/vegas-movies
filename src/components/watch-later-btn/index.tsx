"use client";

import { useMovies } from "@context/movie";

export interface Props {
  movieId: number;
  onWatchlist: boolean;
}

function WatchLaterBtn({ movieId, onWatchlist }: Props) {
  const { updateWatchlistStatus } = useMovies();

  const toggleWatchLater = () => {
    updateWatchlistStatus(movieId, onWatchlist);
  };

  return (
    <div>
      <button className="text-right" onClick={toggleWatchLater}>
        {onWatchlist ? (
          <img
            className="!h-[36px] !w-[36px]"
            title="Remove from watchlist"
            alt="Remove from watchlist btn"
            src="/icons/check.svg"
          />
        ) : (
          <img
            className="!h-[36px] !w-[36px]"
            title="Add to watchlist"
            alt="Add to watchlist btn"
            src="/icons/save.svg"
          />
        )}
      </button>
    </div>
  );
}

export default WatchLaterBtn;
