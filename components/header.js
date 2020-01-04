import React from "react";
/* components */
import Navigation from "./navigation";

export default () => (
  <header className="header">
    <Navigation />
    <style jsx>{`
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 70px;
        background-color: #1e1b26;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 5;
      }
    `}</style>
  </header>
);
