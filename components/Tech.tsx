import Card from "./Card";

type TechList = {
  name: string;
  icon: string;
};

const Tech = () => {
  const techList: TechList[] = [
    { name: "Vue", icon: "vuejs" },
    { name: "React", icon: "react" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Go", icon: "go" },
    { name: "Rust", icon: "rust" },
    { name: "GraphQL", icon: "graphql" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Node", icon: "nodejs" },
    { name: "Vim", icon: "vim" },
    { name: "Laravel", icon: "laravel" },
    { name: "Docker", icon: "docker" },
  ];
  return (
    <div className="m-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {techList.map((tech) => (
        <Card name={tech.name} icon={tech.icon} detect={"icon"} />
      ))}
    </div>
  );
};
// grid grid-cols-1   gap-4
export default Tech;
