import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";
import Tech from "../components/Tech";
import Favorite from "../components/Favorite";
import Account from "../components/Account";

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
    <div className="flex flex-row-reverse m-12">
      <p className="text-5xl dark:text-white">Account</p>
    </div>
    <Account />
  </Layout>
);

export default IndexPage;
