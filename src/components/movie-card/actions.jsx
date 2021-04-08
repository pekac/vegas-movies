import React from "react";

import WatchLaterBtn from "@components/watch-later-btn";
import TrailerBtn from "@components/trailer-btn";

const MovieActions = ({ movie }) => (
  <>
    <div className="movie-actions">
      <TrailerBtn movie={movie} />
      <WatchLaterBtn movie={movie} />
    </div>

    <style jsx>{`
      .movie-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
      }
      .action-row {
        margin-top: 24px;
      }
    `}</style>
  </>
);

export default MovieActions;
