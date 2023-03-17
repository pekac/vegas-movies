"use client";

import { useMovies } from "@context/movie";

function SearchInput() {
  const { search } = useMovies();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  };

  return (
    <div className="flex-1">
      <div className="my-0 mx-auto px-3 md:px-5 max-w-[500px] h-[40px] flex">
        <input
          type="text"
          className="w-full p-2 h-full text-base text-red-400 rounded-l-xs border-4 border-solid border-red-400 outline-none"
          placeholder="What are you looking for?"
          onChange={onChange}
        />
        <button
          type="submit"
          className="text-center text-white rounded-r-xs bg-red-400 border-1 border-solid border-red-400"
        >
          {/* search icon */}
          search
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
