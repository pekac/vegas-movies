"use client";

// i {
//   position: relative;
//   float: left;
//   line-height: 1;
// }

function TrailerBtn() {
  const showTrailer = () => {};
  return (
    <button
      className="px-2 py-1 border border-solid border-red-400 rounded-xs"
      onClick={showTrailer}
    >
      <h3 className="text-sm font-normal text-red-400">
        {/* play icon */}
        WATCH TRAILER
      </h3>
    </button>
  );
}

export default TrailerBtn;
