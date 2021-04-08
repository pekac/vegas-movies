import React from "react";

const MovieContent = ({ movie }) => (
  <>
    <h1 className="movie-title">{movie.original_title}</h1>
    <p className="release-date">Release date: {movie.release_date}</p>
    <div className="summary-row">
      <h5>SUMMARY</h5>
      <div className="movie-grade">{movie.vote_average}/10</div>
    </div>
    <p className="movie-description">{movie.overview}</p>

    <style jsx>{`
      .movie-title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .release-date,
      .movie-grade {
        margin: 0px;
        padding: 0px;
        font-family: "Open Sans", sans-serif;
        font-size: 12px;
        color: #818181;
        width: auto;
        display: block;
        float: left;
        margin-right: 6px;
        font-weight: 600;
      }
      .release-date {
        margin: 5px 0;
      }
      .summary-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
      }
      .movie-grade {
        float: right;
        color: #fe4141;
        font-size: 16px;
      }
      .movie-details {
        font-family: "Open Sans", sans-serif;
        font-size: 12px;
        font-weight: 300;
        color: #b4b4b4;
      }
      .movie-description {
        font-family: "Open Sans", sans-serif;
        font-size: 12px;
        font-weight: 400;
        color: #9b9b9b;
        text-align: justify;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}</style>
  </>
);

export default MovieContent;
