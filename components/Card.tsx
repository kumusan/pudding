type Props = {
  name: string;
  icon?: string;
  img?: string;
  detect: "icon" | "img";
};

const Card = (props: Props) => (
  <div className="grid p-2 m-10 shadow bg-whitemode text-black dark:bg-gray-800 dark:text-white">
    {props.detect === "icon" ? (
      <i
        className={`devicon-${props.icon}-plain text-8xl h-auto w-auto justify-self-center`}
      ></i>
    ) : (
      <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden justify-self-center">
        <img src={props.img!} alt="" className="h-24 w-24" />
      </div>
    )}
    <p className="text-3xl justify-self-center">{props.name}</p>
  </div>
);

export default Card;
