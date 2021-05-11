import Link from "next/link";
import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import Tech from "../components/Tech";
import Favorite from "../components/Favorite";

const IndexPage = () => (
  <Layout title="KUMUSAN - BLOG">
    <div className="flex flex-row-reverse m-12">
      <p className="text-5xl dark:text-white">Learn</p>
    </div>
    <Tech />
    <div className="flex flex-row-reverse m-12">
      <p className="text-5xl dark:text-white">Favorite</p>
    </div>
    <Favorite />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
