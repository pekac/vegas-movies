import React from "react";

import TrailerProvider from "./trailer";
import FavoritesProvider from "./favorites";

const AppProviders = ({ children }) => (
  <FavoritesProvider>
    <TrailerProvider>{children}</TrailerProvider>
  </FavoritesProvider>
);

export default AppProviders;
