import React from "react";

export default ({ isActive, onClick }) => (
  <button className="fav-btn" onClick={onClick}>
    {isActive ? (
      <i className="material-icons active">favorite</i>
    ) : (
      <i className="material-icons">favorite_border</i>
    )}
    <style jsx>{`
      .fav-btn {
        float: right;
      }

      .fav-btn i {
        color: #e7e7e7;
        font-size: 42px;
        text-align: right;
      }
    `}</style>
  </button>
);
