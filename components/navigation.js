import React from "react";
import Link from "next/link";

export default () => (
  <div>
    <nav>
      <Link href="/watch-later">
        <a>Watch Later</a>
      </Link>
      <Link href="/favorites">
        <a>Favorite Movies</a>
      </Link>
    </nav>
  </div>
);
