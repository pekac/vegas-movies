import React from "react";
/* components */
import Navigation from "@components/navigation";

const FooterNav = () => (
  <footer className="footer">
    <Navigation />
    <style jsx>{`
      .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        padding: 5px;
        background-color: #1e1b26;
        border-top: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
      }
      @media (min-width: 520px) {
        .footer {
          display: none;
        }
      }
    `}</style>
  </footer>
);

export default FooterNav;
