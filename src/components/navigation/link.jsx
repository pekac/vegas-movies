import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavLink = ({ link }) => {
  const router = useRouter();
  const isActiveClass = router.pathname === link.path ? "active" : "";
  return (
    <div>
      <Link href={link.path} className={`nav-link ${isActiveClass}`}>
        {link.name}
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

        @media (max-width: 767px) {
          .nav-link {
            font-size: 13px;
            margin: 0 10px;
          }

          .nav-link.active {
            padding: 8px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default NavLink;
