import Card from "./Card";

type FavList = {
  name: string;
  url: string;
};

const Favorite = () => {
  const favList: FavList[] = [
    {
      name: "test",
      url:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2",
    },
    { name: "beel", url: "drink_beer.png" },
  ];
  return (
    <div className="m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {favList.map((fav) => (
        <Card name={fav.name} img={fav.url} detect={"img"} />
      ))}
    </div>
  );
};

export default Favorite;
