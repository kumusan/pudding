import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import TestPage from "../components/content/TestPage";

const Blog = () => {
  return (
    <Layout title="KUMUSAN - BLOG">
      <TestPage />
      <p className="dark:text-white">test</p>
    </Layout>
  );
};

export default Blog;
