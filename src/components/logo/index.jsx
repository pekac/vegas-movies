import React from "react";
import Link from "next/link";

const Logo = () => (
  <div>
    <Link href="/">
      <img
        className="logo"
        src="/static/logo.png"
        alt="Vegas Movies"
        title="Vegas Movies"
      />
    </Link>
    <style jsx>{`
      .logo {
        height: 55px;
        cursor: pointer;
      }
      @media (max-width: 767px) {
        .logo {
          height: 45px;
        }
      }
    `}</style>
  </div>
);

export default Logo;
