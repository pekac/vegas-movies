import "./globals.css";
import styles from "./styles.module.css";

import Header from "@components/header";
import FooterNav from "@components/footer-nav";

import MoviesProvider from "@context/movie";

import { gql, db } from "@lib/graphql";

export const metadata = {
  title: "Vegas Movies - Entertainment's finest",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

async function Layout({ children }) {
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

const GetMovies = gql`
  query GetMovies {
    movies(order_by: { vote_average: desc }) {
      backdrop: backdrop_path
      id
      lang: original_language
      overview
      imgSrc: poster_path
      releaseDate: release_date
      title
      rating: vote_average
      voteCount: vote_count
      isFavorite: is_favorite
      onWatchlist: on_watchlist
    }
  }
`;

export default Layout;
