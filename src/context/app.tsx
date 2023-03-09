import React from "react";

import TrailerProvider from "./trailer";
import SearchProvider from "./search";

const AppProviders = ({ children }) => (
  <SearchProvider>
    <TrailerProvider>{children}</TrailerProvider>
  </SearchProvider>
);

export default AppProviders;
