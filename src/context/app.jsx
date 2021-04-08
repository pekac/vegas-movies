import React from "react";

import TrailerProvider from "./trailer";
import FavoritesProvider from "./favorites";
import WatchLaterProvider from "./watch-later";
import MoviesProvider from "./movies";
import SearchProvider from "./search";

const AppProviders = ({ children }) => (
  <MoviesProvider>
    <SearchProvider>
      <FavoritesProvider>
        <WatchLaterProvider>
          <TrailerProvider>{children}</TrailerProvider>
        </WatchLaterProvider>
      </FavoritesProvider>
    </SearchProvider>
  </MoviesProvider>
);

export default AppProviders;
