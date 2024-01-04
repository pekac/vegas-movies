import Logo from "@components/logo";
import SearchInput from "@components/search-input";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 py-1 px-2 h-[60px] flex justify-between items-center bg-gray-800 z-10">
      <Logo />
      <SearchInput />
      <span />
    </header>
  );
}

export default Header;
