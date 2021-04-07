import React, { useContext } from "react";

import { TrailerContext } from "@context/trailer";

const TrailerModal = () => {
  const [trailer, closeTrailer] = useContext(TrailerContext);

  if (!trailer) {
    return null;
  }

  return (
    <div className="popup-container" onClick={closeTrailer}>
      <iframe
        className="trailer"
        type="text/html"
        height="390"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        frameBorder="0"
        allowFullScreen
      />
      <style jsx>{`
        .popup-container {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 111 !important;
        }
        .trailer {
          width: 100%;
          max-width: 640px;
        }
      `}</style>
    </div>
  );
};

export default TrailerModal;
