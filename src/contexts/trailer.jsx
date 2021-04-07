import React from "react";

import TrailerModal from "@components/trailer-modal";

import MovieManagement from "@model/movie-management";

const TrailerContext = React.createContext(null);

export const TrailerProvider = ({ children }) => {
  const [trailer, setTrailer] = useState(null);

  const getTrailer = async (movie) => {
    const trailer = await MovieManagement.getTrailerForMovie(movie);
    setTrailer({ trailer });
  };

  const closeTrailer = () => setTrailer(null);

  return (
    <TrailerContext.Provider
      value={{
        trailer,
        getTrailer,
        closeTrailer,
      }}
    >
      <TrailerModal />
      {children}
    </TrailerContext.Provider>
  );
};

export const useTrailer = () => {
  const ctx = React.useContext(TrailerContext);
  if (ctx == null) {
    throw new Error("useTrailer must be used within TrailerProvider");
  }

  return ctx;
};
