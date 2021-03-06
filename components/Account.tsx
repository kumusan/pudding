import Card from "./Card";
import Icon from "../interfaces/card";

const AccountList: Icon[] = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kumusan",
    detect: "icon",
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/kumu7kumu",
    detect: "icon",
  },
  {
    name: "Hatena",
    img: "hatena.jpg",
    link: "https://grekumu.hatenablog.jp/",
    detect: "img",
  },
];

const Account = () => {
  return (
    <div className="m-5 grid sm:grid-cols-2 md:grid-cols-3">
      {AccountList.map((account, index) => {
        return account.detect === "icon" ? (
          <Card
            name={account.name}
            icon={account.icon}
            link={account.link}
            detect={account.detect}
            key={index}
          />
        ) : (
          <Card
            name={account.name}
            img={account.img}
            link={account.link}
            detect={account.detect}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Account;
