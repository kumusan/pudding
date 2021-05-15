import Card from "./Card";
import TechList from "../interfaces/card";

const Tech = () => {
  const techList: TechList[] = [
    { name: "Vue", icon: "vuejs", link: "" },
    { name: "React", icon: "react", link: "" },
    { name: "JavaScript", icon: "javascript", link: "" },
    { name: "TypeScript", icon: "typescript", link: "" },
    { name: "Go", icon: "go", link: "" },
    { name: "Rust", icon: "rust", link: "" },
    { name: "GraphQL", icon: "graphql", link: "" },
    { name: "PostgreSQL", icon: "postgresql", link: "" },
    { name: "Node", icon: "nodejs", link: "" },
    { name: "Vim", icon: "vim", link: "" },
    { name: "Laravel", icon: "laravel", link: "" },
    { name: "Docker", icon: "docker", link: "" },
  ];
  return (
    <div className="m-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {techList.map((tech) => (
        <Card
          name={tech.name}
          icon={tech.icon}
          link={tech.link}
          detect={"icon"}
        />
      ))}
    </div>
  );
};
// grid grid-cols-1   gap-4
export default Tech;
