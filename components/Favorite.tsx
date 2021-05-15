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
      path: "beel.png",
      url:
        "https://www.amazon.co.jp/dp/B001TP8N6I/ref=cm_sw_r_tw_dp_SN7KVTJJZZHDR1PDVB30",
    },
    {
      name: "monster",
      path: "monster.png",
      url:
        "https://www.amazon.co.jp/dp/B007V6MQJY/ref=cm_sw_r_tw_dp_ZX6NA21TYVWXTAG656ES",
    },
    {
      name: "peace",
      path: "peace.png",
      url: "https://www.tabako-sakuranbo.co.jp/goods/goods-1264.php",
    },
  ];
  return (
    <div className="m-5 grid grid-cols-3">
      {favList.map((fav) => (
        <Card name={fav.name} img={fav.path} detect={"img"} />
      ))}
    </div>
  );
};

export default Favorite;
