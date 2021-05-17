import Card from "./Card";
import TechList from "../interfaces/card";

const Tech = () => {
  const techList: TechList[] = [
    { name: "Vue", icon: "vuejs", link: "https://v3.ja.vuejs.org/" },
    { name: "React", icon: "react", link: "https://ja.reactjs.org/" },
    { name: "JavaScript", icon: "javascript", link: "https://developer.mozilla.org/ja/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "typescript", link: "https://www.typescriptlang.org/" },
    { name: "Go", icon: "go", link: "https://golang.org/" },
    { name: "Rust", icon: "rust", link: "https://www.rust-lang.org/" },
    { name: "GraphQL", icon: "graphql", link: "https://graphql.org/" },
    { name: "Node", icon: "nodejs", link: "https://nodejs.org/en/" },
    { name: "Laravel", icon: "laravel", link: "https://laravel.com/" },
    { name: "Docker", icon: "docker", link: "https://www.docker.com/" },
    { name: "PostgreSQL", icon: "postgresql", link: "https://www.postgresql.org/" },
    { name: "Vim", icon: "vim", link: "https://www.vim.org/" },
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

export default Tech;
