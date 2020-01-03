import React from "react";

import NavLink from "./navigation-link";

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "favorites",
    path: "/favorites"
  },
  {
    name: "watch later",
    path: "/watch-later"
  }
];

export default () => (
  <div>
    <nav className="nav-menu">
      {links.map(link => (
        <NavLink key={link.path} link={link} />
      ))}
    </nav>
    <style jsx>{`
      .nav-menu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 70px;
        z-index: 5;
        background-color: #1e1b26;
      }
    `}</style>
  </div>
);
