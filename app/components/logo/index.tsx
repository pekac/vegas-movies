import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <img
        className="h-[45px] md:h-[55px]"
        src="/icons/logo.png"
        alt="Vegas Movies"
        title="Vegas Movies"
      />
    </Link>
  );
}

export default Logo;
