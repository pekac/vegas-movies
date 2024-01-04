import "./globals.css";

import { Header } from "@components/layout";

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
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="py-8 w-full min-h-screen flex flex-wrap justify-center bg-gray-800">
          {children}
        </main>
      </body>
    </html>
  );
}

export default Layout;
