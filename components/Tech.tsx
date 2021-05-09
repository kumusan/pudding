import {
  IconDefinition,
  faVuejs,
  faReact,
  faNpm,
  faHtml5,
  faCss3Alt,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import Card from "./Card";

interface TechList {
  name: string;
  icon: IconDefinition;
}

const Tech = () => {
  const techList: TechList[] = [
    { name: "vue", icon: faVuejs },
    { name: "react", icon: faReact },
    { name: "npm", icon: faNpm },
    { name: "html", icon: faHtml5 },
    { name: "css", icon: faCss3Alt },
    { name: "js", icon: faJsSquare },
  ];
  return (
    <div className="m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {techList.map((tech) => (
        <Card icon={tech.icon} detect={"icon"} />
      ))}
      <Card detect={"img"} />
    </div>
  );
};
// grid grid-cols-1   gap-4
export default Tech;
