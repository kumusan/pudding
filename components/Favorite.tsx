import Card from "./Card";
import FavList from "../interfaces/card";

const Favorite = () => {
  const favList: FavList[] = [
    {
      name: "beel",
      img: "beel.png",
      link:
        "https://www.amazon.co.jp/dp/B001TP8N6I/ref=cm_sw_r_tw_dp_SN7KVTJJZZHDR1PDVB30",
    },
    {
      name: "monster",
      img: "monster.png",
      link:
        "https://www.amazon.co.jp/dp/B007V6MQJY/ref=cm_sw_r_tw_dp_ZX6NA21TYVWXTAG656ES",
    },
    {
      name: "peace",
      img: "peace.png",
      link: "https://www.tabako-sakuranbo.co.jp/goods/goods-1264.php",
    },
  ];
  return (
    <div className="m-5 grid sm:grid-cols-2 md:grid-cols-3">
      {favList.map((fav) => (
        <Card name={fav.name} img={fav.img} link={fav.link} detect={"img"} />
      ))}
    </div>
  );
};

export default Favorite;
