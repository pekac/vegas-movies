import styles from "./styles.module.css";

import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <img
        className={styles["logo"]}
        src="/icons/logo.png"
        alt="Vegas Movies"
        title="Vegas Movies"
      />
    </Link>
  );
}

export default Logo;
