import React from "react";
import Link from "next/link";

export default () => (
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
      }
    `}</style>
  </div>
);
