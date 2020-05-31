import React from "react";
/* components */
import NavLink from "./navigation-link";

const links = [
  {
    name: "favorites",
    path: "/favorites",
  },
  {
    name: "watch later",
    path: "/watch-later",
  },
];

export default () => (
  <div>
    <nav className="nav-menu">
      {links.map((link) => (
        <NavLink key={link.path} link={link} />
      ))}
    </nav>
    <style jsx>{`
      .nav-menu {
        display: flex;
      }
    `}</style>
  </div>
);
