import Card from "./Card";

type FavList = {
  name: string;
  path: string;
  url: string;
};

const Favorite = () => {
  const favList: FavList[] = [
    {
      name: "beel",
      path: "beel.jpg",
      url:
        "https://www.amazon.co.jp/dp/B001TP8N6I/ref=cm_sw_r_tw_dp_SN7KVTJJZZHDR1PDVB30",
    },
    {
      name: "monster",
      path: "monster.jpg",
      url:
        "https://www.amazon.co.jp/dp/B007V6MQJY/ref=cm_sw_r_tw_dp_ZX6NA21TYVWXTAG656ES",
    },
    {
      name: "peace",
      path: "peace.jpeg",
      url: "https://www.tabako-sakuranbo.co.jp/goods/goods-1264.php",
    },
  ];
  return (
    <div className="m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {favList.map((fav) => (
        <Card name={fav.name} img={fav.path} detect={"img"} />
      ))}
    </div>
  );
};

export default Favorite;
