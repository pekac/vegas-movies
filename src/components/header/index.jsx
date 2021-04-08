import React from "react";

import Logo from "@components/logo";
import SearchInput from "@components/search-input";
import Navigation from "@components/navigation";

const Header = () => (
  <header className="header">
    <Logo />
    <SearchInput />
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

export default Header;
