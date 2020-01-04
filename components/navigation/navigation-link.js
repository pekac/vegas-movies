import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const NavLink = ({ router, link }) => {
  const isActiveClass = router.pathname === link.path ? "active" : "";
  return (
    <div>
      <Link href={link.path}>
        <a className={`nav-link ${isActiveClass}`}>{link.name}</a>
      </Link>
      <style jsx>{`
        .nav-link {
          color: #e7e7e7;
          font-family: "Montserrat", sans-serif;
          font-weight: 400;
          font-size: 15px;
          margin: 0 20px;
          text-decoration: none;
          text-transform: uppercase;
        }
        .nav-link.active {
          background-color: #e7e7e7;
          color: #1e1b26;
          padding: 8px 16px;
          font-weight: bold;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default withRouter(NavLink);
