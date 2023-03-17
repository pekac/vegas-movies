"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IRoute } from "@constants/routes";

export interface Props {
  link: IRoute;
}

function NavLink({ link }: Props) {
  const pathname = usePathname();
  const isActiveClass = pathname === link.path;
  return (
    <Link
      href={link.path}
      className={clsx(
        "my-0 mx-3 md:mx-5 py-2 px-4 text-sm md:text-base text-grey-100 uppercase no-underline",
        { isActiveClass: "font-bold text-grey-900 bg-grey-100 rounded-xs" }
      )}
    >
      {link.name}
    </Link>
  );
}

export default NavLink;
