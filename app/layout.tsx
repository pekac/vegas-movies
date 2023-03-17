import "./globals.css";
import styles from "./styles.module.css";

import Header from "@components/header";
import FooterNav from "@components/footer-nav";

import MoviesProvider from "@context/movie";

import { db } from "@lib/graphql";

import { GetMovies } from "@queries/movies";

export const metadata = {
  title: "Vegas Movies - Entertainment's finest",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export interface Props {
  children: React.ReactNode;
}

async function Layout({ children }: Props) {
  // @ts-ignore
  const { movies } = await db.request(GetMovies);
  return (
    <html lang="en">
      <body>
        <MoviesProvider allMovies={movies}>
          <Header />
          <main className={styles.container}>{children}</main>
          <FooterNav />
        </MoviesProvider>
      </body>
    </html>
  );
}

export default Layout;
