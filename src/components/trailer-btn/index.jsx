import React, { useContext } from "react";

import { TrailerContext } from "@context/trailer";

const TrailerBtn = ({ movie }) => {
  const { getTrailer } = useContext(TrailerContext);
  const showTrailer = () => getTrailer(movie);
  return (
    <>
      <button className="watch-btn" onClick={showTrailer}>
        <h3>
          <i className="material-icons">play_arrow</i>WATCH TRAILER
        </h3>
      </button>
      <style jsx>{`
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
};

export default TrailerBtn;
