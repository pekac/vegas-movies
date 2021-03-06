import React from "react";

export default ({ children }) => (
  <main className="container">
    {children}
    <style jsx>{`
      .container {
        background: #1e1b26;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
        padding-top: 70px;
        padding-bottom: 70px;
        width: 100%;
        color: #333;
        min-height: 100vh;
      }
    `}</style>
  </main>
);
