import styles from "./styles.module.css";

import Navigation from "@components/navigation";

function FooterNav() {
  return (
    <footer className={styles.footer}>
      <Navigation />
    </footer>
  );
}

export default FooterNav;
