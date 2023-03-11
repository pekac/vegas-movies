"use client";

import styles from "./styles.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ link }) {
  const pathname = usePathname();
  const isActiveClass = pathname === link.path ? styles["active"] : "";
  return (
    <Link href={link.path} className={`${styles["nav-link"]} ${isActiveClass}`}>
      {link.name}
    </Link>
  );
}

export default NavLink;
