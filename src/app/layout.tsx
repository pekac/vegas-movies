import styles from "./styles.module.css";

// import Header from "@components/header";
// import FooterNav from "@components/footer-nav";

export const metadata = {
  title: "Vegas Movies - Entertainment's finest",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <main className={styles.container}>{children}</main>
      {/* <FooterNav /> */}
    </>
  );
}

export default Layout;
