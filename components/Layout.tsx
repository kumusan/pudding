import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import DarkModeToggle from "./DarkModeToggle";

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => (
  <div className="container mx-auto">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <html lang="ja" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Front-End Engineer" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"
      />
    </Head>
    <header className="flex flex-col m-10 dark:text-white mb-3">
      <h1 className="text-7xl">kumusan</h1>
      <p className="text-1xl pl-9">Front-End Engineer</p>
      <div className="pl-12 flex flex-row">
        <Link href="/">
          <a className="underline flex-none self-end">About</a>
        </Link>
        &nbsp;
        <Link href="/blog">
          <a className="underline flex-none self-end">Blog</a>
        </Link>
        <div className="flex-grow"/>
        <DarkModeToggle />
      </div>
    </header>
    {/* 色 */}
    <hr className="text-black" />
    {children}
  </div>
);

export default Layout;
