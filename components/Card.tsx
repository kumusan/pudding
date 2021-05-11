import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  name: string;
  icon?: IconDefinition;
  img?: string;
  detect: "icon" | "img";
};

const Card = (props: Props) => (
  <div className="flex items-stretch p-4 m-10 shadow rounded-lg space-x-4 bg-whitemode text-black dark:bg-gray-800 dark:text-white">
    {props.detect === "icon" ? (
      <FontAwesomeIcon
        icon={props.icon!}
        className="text-9xl h-full w-full justify-self-start"
      />
    ) : (
      <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40 items-start">
        <img src={props.img!} alt="" className="" />
      </div>
    )}
    <p className="text-3xl self-center">{props.name}</p>
  </div>
);

export default Card;
