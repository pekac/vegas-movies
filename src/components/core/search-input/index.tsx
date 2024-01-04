import { IconButton } from "../icon-button";

export function SearchInput() {
  return (
    <div className="flex-1">
      <form className="my-0 mx-auto px-3 md:px-5 max-w-[500px] h-[40px] flex">
        <input
          className="w-full p-2 h-full text-base rounded-l-xs outline-none"
          placeholder="What are you looking for?"
          type="text"
          // onChange={onChange}
        />
        <IconButton
          alt="Search movies btn"
          classes="bg-white text-center text-white rounded-r-xs border-1 border-solid"
          src="/icons/search.svg"
          title="Search movies"
          type="submit"
        />
      </form>
    </div>
  );
}
