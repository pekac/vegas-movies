import React, { useState } from "react";

import TrailerModal from "@components/trailer-modal";

import MovieService from "@services/movie-service";

export const TrailerContext = React.createContext(null);

const TrailerProvider = ({ children }) => {
  const [trailer, setTrailer] = useState(null);

  const getTrailer = async (movie) => {
    const trailer = await MovieService.getVideoForMovie({ movieId: movie.id });
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

export default TrailerProvider;
