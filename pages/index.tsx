import Link from "next/link";
import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";

const IndexPage = () => (
  <Layout title="test">
    <h1 className="container mx-auto">kumusan</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
