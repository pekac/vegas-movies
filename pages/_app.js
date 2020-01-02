import React, { Fragment } from "react";

export default () => {
  const { Component, pageProps } = this.props;
  return (
    <Fragment>
      <Head>
        <title>Vegas Movies - Entertainment's finest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
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

        .container {
          background: #1e1b26;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0;
          width: 100%;
          color: #333;
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
};
