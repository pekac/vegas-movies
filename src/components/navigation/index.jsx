import React from "react";

import NavLink from "@components/navigation/link";

const Navigation = () => (
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

export default Navigation;
