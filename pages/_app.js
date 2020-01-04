import React, { Fragment } from "react";
import App from "next/app";
import Head from "next/head";
/* components */
import Navigation from "../components/navigation";
/* utils */
import { findMovieIndexInList } from "../common/utils";

export default class MyApp extends App {
  state = {
    favorites: [],
    watchLater: []
  };

  updateFavs = movie => {
    const { favorites } = this.state;
    const index = findMovieIndexInList(favorites, movie);
    if (index < 0) {
      favorites.push(movie);
      this.setState({ favorites });
    } else {
      this.removeFromFavs(index);
    }
  };

  removeFromFavs = index => {
    const { favorites } = this.state;
    favorites.splice(index, 1);
    this.setState({ favorites });
  };

  updateWatchLater = movie => {
    const { watchLater } = this.state;
    const index = findMovieIndexInList(watchLater, movie);
    if (index < 0) {
      watchLater.push(movie);
      this.setState({ watchLater });
    } else {
      // notification
    }
  };

  render() {
    const { Component, pageProps } = this.props;
    const { favorites, watchLater } = this.state;
    return (
      <Fragment>
        <Head>
          <title>Vegas Movies - Entertainment's finest</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation />
        <Component
          {...pageProps}
          watchLater={watchLater}
          favorites={favorites}
          updateWatchLater={this.updateWatchLater}
          updateFavs={this.updateFavs}
        />
        <style jsx global>{`
          @import url(
            https://fonts.googleapis.com/css?family=Montserrat:400,
            700
          );
          @import url(
            https://fonts.googleapis.com/css?family=Open+Sans:400,
            300,
            600,
            700,
            800,
            300italic,
            400italic,
            600italic,
            700italic,
            800italic
          );
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
      </Fragment>
    );
  }
}
