import Card from "./Card";
import FavList from "../interfaces/card";

const Favorite = () => {
  const favList: FavList[] = [
    {
      name: "beer",
      img: "beer.jpg",
      link:
        "https://www.amazon.co.jp/dp/B001TP8N6I/ref=cm_sw_r_tw_dp_SN7KVTJJZZHDR1PDVB30",
    },
    {
      name: "monster",
      img: "monster.jpg",
      link:
        "https://www.amazon.co.jp/dp/B007V6MQJY/ref=cm_sw_r_tw_dp_ZX6NA21TYVWXTAG656ES",
    },
    {
      name: "peace",
      img: "peace.jpg",
      link: "https://www.tabako-sakuranbo.co.jp/goods/goods-1264.php",
    },
  ];
  return (
    <div className="m-5 grid sm:grid-cols-2 md:grid-cols-3">
      {favList.map((fav, index) => (
        <Card name={fav.name} img={fav.img} link={fav.link} detect={"img"} key={index}/>
      ))}
    </div>
  );
};

export default Favorite;
