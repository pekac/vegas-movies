import { Logo, SearchInput } from "@components/core";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 py-1 px-2 h-[60px] flex justify-between items-center bg-gray-800 border-b border-gray-600 z-10">
      <Logo />
      {/* <SearchInput /> */}
      <span />
    </header>
  );
}
