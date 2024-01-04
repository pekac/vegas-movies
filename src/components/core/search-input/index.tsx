"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { createUrl } from "@lib/utils";

import { IconButton } from "../icon-button";

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/", newParams));
  }

  return (
    <div className="flex-1">
      <form
        className="my-0 mx-auto px-3 md:px-5 max-w-[500px] h-[40px] flex"
        onSubmit={onSubmit}
      >
        <input
          name="search"
          className="w-full p-2 h-full text-base rounded-l-xs outline-none"
          placeholder="What are you looking for?"
          type="text"
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
