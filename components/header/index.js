import React from "react";
/* components */
import Logo from "../logo/";
import SearchInput from "../search-input/";
import Navigation from "../navigation/";

export default ({ onSearch }) => (
  <header className="header">
    <Logo />
    <SearchInput onSearch={onSearch} />
    <div className="nav-wrapper">
      <Navigation />
    </div>
    <style jsx>{`
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        padding: 5px;
        background-color: #1e1b26;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 5;
      }

      @media (max-width: 519px) {
        .nav-wrapper {
          display: none;
        }
      }
    `}</style>
  </header>
);
