import Link from "next/link";
/* components */
import { Logo } from "@components/core";
import { SearchInput } from "@components/layout";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 py-1 px-4 h-[60px] flex justify-between items-center bg-gray-800 border-b border-gray-600 z-10">
      <Logo />
      <SearchInput />
      <Link href="/watchlist">
        <img
          className="h-[32px] md:h-[42px]"
          src="/icons/list.svg"
          alt="Watchlist"
          title="Watchlist"
        />
      </Link>
    </header>
  );
}
