import React from "react";

export default () => (
  <div className="wrap">
    <div className="search">
      <input
        type="text"
        className="search-term"
        placeholder="What are you looking for?"
      />
      <button type="submit" className="search-button">
        <i className="material-icons">search</i>
      </button>
    </div>
    <style jsx>{`
      .search {
        display: flex;
        flex-basis: 100%;
      }

      .search-term {
        width: 100%;
        border: 3px solid #fe4141;
        border-right: none;
        padding: 5px;
        height: 28px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9dbfaf;
      }

      .search-term:focus {
        color: #fe4141;
      }

      .search-button {
        width: 40px;
        height: 44px;
        border: 1px solid #fe4141;
        background: #fe4141;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;
      }
    `}</style>
  </div>
);
