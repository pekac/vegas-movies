"use client";

import { useMovies } from "@context/movie";

export interface Props {
  movieId: number;
  onWatchlist: boolean;
}

// i {
//  color: #fe4141;
//  font-size: 28px;
//  text-align: right;
// }

function WatchLaterBtn({ movieId, onWatchlist }: Props) {
  const { updateWatchlistStatus } = useMovies();

  const toggleWatchLater = () => {
    updateWatchlistStatus(movieId, onWatchlist);
  };

  return (
    <div>
      <button className="text-right" onClick={toggleWatchLater}>
        {/* save icon and checkmark icon */}
        {onWatchlist ? "remove" : "save"}
      </button>
    </div>
  );
}

export default WatchLaterBtn;
