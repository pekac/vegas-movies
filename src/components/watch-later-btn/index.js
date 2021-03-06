import React from "react";

export default ({ isActive, toggleWatchLater }) => (
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
