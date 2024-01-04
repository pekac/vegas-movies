import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <img
        className="h-[32px] md:h-[42px]"
        src="/icons/logo.svg"
        alt="Vegas Movies"
        title="Vegas Movies"
      />
    </Link>
  );
}
