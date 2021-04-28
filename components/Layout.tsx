import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => (
  <div className="container mx-auto">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="flex flex-col m-10">
      <h1 className="text-5xl">kumusan</h1>
      <p className="text-1xl pl-6">Front-End Engineer</p>
    </header>
    <hr />
    {children}
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
