import React from "react";

import TrailerProvider from "./trailer";

const AppProviders = ({ children }) => (
  <TrailerProvider>{children}</TrailerProvider>
);

export default AppProviders;
