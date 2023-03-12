import styles from "./styles.module.css";

import Logo from "@/app/components/logo";
import SearchInput from "@/app/components/search-input";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchInput />
      <img className={styles.menu} src="/icons/menu.svg" />
    </header>
  );
}

export default Header;
