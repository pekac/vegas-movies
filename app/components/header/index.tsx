import styles from "./styles.module.css";

import Logo from "@components/logo";
import SearchInput from "@components/search-input";

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
