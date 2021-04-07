import React from "react";

import TrailerProvider from "./trailer";
import FavoritesProvider from "./favorites";
import WatchLaterProvider from "./watch-later";

const AppProviders = ({ children }) => (
  <FavoritesProvider>
    <WatchLaterProvider>
      <TrailerProvider>{children}</TrailerProvider>
    </WatchLaterProvider>
  </FavoritesProvider>
);

export default AppProviders;
