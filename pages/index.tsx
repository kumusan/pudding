import Link from "next/link";
import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import Tech from "../components/Tech";

const IndexPage = () => (
  <Layout title="KUMUSAN - BLOG">
    ここになにか入れる
    <Tech />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
