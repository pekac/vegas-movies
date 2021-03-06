import React from "react";

export default ({ onSearch }) => (
  <div className="wrap">
    <div className="search">
      <input
        type="text"
        className="search-term"
        placeholder="What are you looking for?"
        onChange={onSearch}
      />
      <button type="submit" className="search-button">
        <i className="material-icons">search</i>
      </button>
    </div>
    <style jsx>{`
      .wrap {
        flex: 1;
      }

      .search {
        display: flex;
        margin: 0 20px;
      }

      @media (max-width: 767px) {
        .search {
          margin: 0 10px;
        }
      }

      .search-term {
        width: 100%;
        border: 3px solid #fe4141;
        border-right: none;
        padding: 5px;
        height: 24px;
        font-size: 16px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9dbfaf;
      }

      .search-term:focus {
        color: #fe4141;
      }

      .search-button {
        width: 46px;
        height: 40px;
        border: 1px solid #fe4141;
        background: #fe4141;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
      }

      .search-button i {
        font-size: 36px;
      }
    `}</style>
  </div>
);
