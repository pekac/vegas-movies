import React from "react";

import NavLink from "@components/navigation/link";

import { ROUTES } from "@constants/routes";

const Navigation = () => (
  <div>
    <nav className="nav-menu">
      {ROUTES.map((link) => (
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
