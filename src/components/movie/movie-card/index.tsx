"use client";

import { useState } from "react";
/* actions */
import { updateWatchlistStatus } from "@actions/movies";
/* constants */
import { IMG_BASE_URL } from "@constants/api";
/* components */
import { IconButton } from "@components/core";
/* models */
import { IMovie } from "@models/movie";

export interface IMovieCard {
  movie: IMovie;
}

export function MovieCard({ movie }: IMovieCard) {
  const { id, imgSrc, onWatchlist, title } = movie;
  const [saved, setSaved] = useState<boolean>(onWatchlist);

  function updateWatchlist() {
    updateWatchlistStatus(id, onWatchlist);
    setSaved(!onWatchlist);
  }

  const src = `${IMG_BASE_URL}${imgSrc}`;
  const bookmarkSrc = saved
    ? "/icons/bookmark-added.svg"
    : "/icons/bookmark.svg";

  return (
    <div className="relative w-[250px] sm2:w-[230px] h-[380px] sm2:h-[350px] transition-transform transform-gpu hover:scale-105 hover:cursor-pointer">
      <img src={src} alt={title} title={title} />
      <IconButton
        classes="absolute top-[5px] right-0"
        src={bookmarkSrc}
        onClick={updateWatchlist}
      />
    </div>
  );
}
