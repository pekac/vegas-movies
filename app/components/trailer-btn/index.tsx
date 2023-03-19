"use client";

function TrailerBtn() {
  const showTrailer = () => {};
  return (
    <button
      className="px-2 py-1 flex justify-between items-center border border-solid border-red-400 rounded-xs"
      onClick={showTrailer}
    >
      <img
        className="pr-1 !h-[20px] !w-[20px]"
        title="Play trailer"
        alt="Play trailer btn"
        src="/icons/play.svg"
      />
      <h3 className="text-sm font-normal text-red-400">WATCH TRAILER</h3>
    </button>
  );
}

export default TrailerBtn;
