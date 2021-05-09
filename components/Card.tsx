import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon?: IconDefinition;
  img?: string;
  detect: "icon" | "img";
};

const Card = (props: Props) => (
  <div className="flex bg-white p-4 m-10 shadow rounded-lg space-x-4">
    {props.detect === "icon" ? (
      <FontAwesomeIcon icon={props.icon!} className="text-9xl h-full w-full" />
    ) : (
      <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40 items-start">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
          alt=""
          className="h-full w-full"
        />
      </div>
    )}
    <p className="text-black">test</p>
  </div>
);

export default Card;
