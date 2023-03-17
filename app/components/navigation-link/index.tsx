"use client";

import styles from "./styles.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IRoute } from "@constants/routes";

export interface Props {
  link: IRoute;
}

function NavLink({ link }: Props) {
  const pathname = usePathname();
  const isActiveClass = pathname === link.path ? styles["active"] : "";
  return (
    <Link href={link.path} className={`${styles["nav-link"]} ${isActiveClass}`}>
      {link.name}
    </Link>
  );
}

export default NavLink;
