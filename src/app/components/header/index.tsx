import styles from "./styles.module.css";

import Logo from "@components/logo";
import SearchInput from "@components/search-input";
import Navigation from "@components/navigation";

function Header() {
  return (
    <header className={styles["header"]}>
      <Logo />
      <SearchInput />
      <div className={styles["nav-wrapper"]}>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
