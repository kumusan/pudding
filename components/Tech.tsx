import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVuejs,
  faReact,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

interface TechList {
  name: string;
  icon: IconDefinition;
}

const Tech = () => {
  const techList: TechList[] = [
    { name: "Vue", icon: faVuejs },
    { name: "React", icon: faReact },
  ];
  return (
    <div className="m-5">
      {techList.map((tech) => (
        <div className="space-y-4 text-3xl inline-block border-2 mr-1">
          <FontAwesomeIcon
            icon={tech.icon}
            className="text-9xl block border-b"
          />
          <p className="block text-center m-0">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tech;
