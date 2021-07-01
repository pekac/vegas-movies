import React from "react";

const MovieLayout = ({ children }) => (
  <>
    <div className="container">
      <div className="movie">{children}</div>
    </div>
    <style jsx>
      {`
        .container {
          width: 375px;
          max-width: 375px;
          height: 660px;
          background-color: #1e1b26;
          box-shadow: 5px 5px 115px -14px black;
          border-radius: 4px;
        }
        @media (max-width: 375px) {
          .container {
            width: 100%;
          }
        }
        .movie {
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 38%,
            rgba(255, 255, 255, 0.06) 39%,
            rgba(30, 27, 38, 0.88) 53%,
            #1e1b26 55%
          );
          width: 100%;
          min-width: 320px;
          height: 660px;
          display: block;
          border-radius: 4px;
        }
      `}
    </style>
  </>
);

export default MovieLayout;