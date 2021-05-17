import Props from "../interfaces/card";

const Card = (props: Props) => (
  <a
    href={props.link}
    target="_blank"
    className="grid p-2 m-10 shadow bg-whitemode text-black max-w-xs dark:bg-gray-800 dark:text-white hover:bg-hoverwhite dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
  >
    {props.detect === "icon" ? (
      <i
        className={`devicon-${props.icon}-plain text-8xl h-auto w-auto justify-self-center`}
      ></i>
    ) : (
      <div className="border-gray-200 rounded-full overflow-hidden justify-self-center">
        <img src={props.img!} alt="" className="h-24 w-24" />
      </div>
    )}
    <p className="text-3xl justify-self-center">{props.name}</p>
  </a>
);

export default Card;
