import React from "react";
import App from "next/app";
import Head from "next/head";

import MovieManagement from "../model/movie-management";

import AppProviders from "@context/app";

class MyApp extends App {
  state = {
    favorites: [],
    watchLater: [],
    movies: [],
    trailer: null,
  };

  updateFavs = (movie) => {
    const favorites = MovieManagement.updateList(this.state.favorites, movie);
    this.setState({ favorites });
  };

  updateWatchLater = (movie) => {
    const watchLater = MovieManagement.updateList(this.state.watchLater, movie);
    this.setState({ watchLater });
  };

  debounce = null;
  searchMovies = (e) => {
    const query = e.target.value;

    clearTimeout(this.debounce);

    this.debounce = setTimeout(async () => {
      const movies = await MovieManagement.getMovies(query);
      this.setState({ movies });
    }, 200);
  };

  render() {
    const { Component, pageProps } = this.props;
    const { favorites, watchLater, movies, trailer } = this.state;
    const Layout = Component.PageLayout;

    return (
      <>
        <Head>
          <title>Vegas Movies - Entertainment's finest</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AppProviders>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProviders>
        <style jsx global>{`
          @import url(https://fonts.googleapis.com/css?family=Montserrat:400,
            700);
          @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,
            300,
            600,
            700,
            800,
            300italic,
            400italic,
            600italic,
            700italic,
            800italic);
          @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

          html,
          body {
            margin: 0;
            padding: 0;
          }

          h1,
          h3,
          h5 {
            font-family: "Montserrat", sans-serif;
            color: #e7e7e7;
            margin: 0px;
          }

          h1 {
            font-size: 36px;
            font-weight: 400;
          }

          h3 {
            font-size: 14px;
            font-weight: 400;
            color: #fe4141;
          }

          h5 {
            font-size: 12px;
            font-weight: 400;
          }

          button {
            outline: none;
            background: transparent;
            border: none;
            cursor: pointer;
          }
        `}</style>
      </>
    );
  }
}

export default MyApp;
