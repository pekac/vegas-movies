import React from "react";

import WatchLaterBtn from "@components/watch-later-btn";

const MovieActions = () => (
  <>
    <div className="movie-actions">
      <button className="watch-btn" onClick={() => null}>
        <h3>
          <i className="material-icons">play_arrow</i>WATCH TRAILER
        </h3>
      </button>
      <WatchLaterBtn />
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
      .watch-btn {
        display: block;
        border: 1px solid #fe4141;
        border-radius: 5px;
        padding: 4px 8px;
        width: 160px;
      }
      .watch-btn i {
        font-size: 14px;
        margin-right: 2px;
        position: relative;
        float: left;
        line-height: 1;
      }
    `}</style>
  </>
);

export default MovieActions;
