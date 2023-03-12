import styles from "./styles.module.css";

import NavLink from "@/app/components/navigation-link";

import { ROUTES } from "@/app/constants/routes";

function Navigation() {
  return (
    <div>
      <nav className={styles["nav-menu"]}>
        {ROUTES.map((link) => (
          <NavLink key={link.path} link={link} />
        ))}
      </nav>
    </div>
  );
}

export default Navigation;
