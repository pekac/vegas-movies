import React, { useContext, useEffect, useState } from "react";

import { WatchLaterContext } from "@context/watch-later";

const WatchLaterBtn = ({ movie }) => {
  const [isActive, setIsActive] = useState(false);
  const { savedMovies, isSaved, update } = useContext(WatchLaterContext);

  useEffect(() => {
    const isActive = isSaved(movie);
    setIsActive(isActive);
  }, [savedMovies]);

  const toggleWatchLater = () => update(movie);

  return (
    <div>
      <button className="save-btn" onClick={toggleWatchLater}>
        {isActive ? (
          <i className="material-icons active">check</i>
        ) : (
          <i className="material-icons">save</i>
        )}
      </button>
      <style jsx>{`
        .save-btn {
          text-align: right;
        }
        .save-btn i {
          color: #fe4141;
          font-size: 28px;
          text-align: right;
        }
      `}</style>
    </div>
  );
};
export default WatchLaterBtn;
