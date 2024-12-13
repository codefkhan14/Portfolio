import React from "react";
import HtmlIcon from "../assets/html.svg";
import CssIcon from "../assets/css.svg";
import JsIcon from "../assets/js.svg";
import TailwindIcon from "../assets/tailwind.svg";
import BootstrapIcon from "../assets/bootstrap.svg";
import ReactIcon from "../assets/react.svg";
import ReduxIcon from "../assets/redux.svg";
import NextIcon from "../assets/next.svg";
import VueIcon from "../assets/Vue.svg";
import nodeJsIcon from "../assets/nodejs.svg";
import expressIcon from "../assets/expressjs.svg";
import typeScriptIcon from "../assets/typescript.svg";
import firebaseIcon from "../assets/firebase.svg";
import mongoDBIcon from "../assets/mongodb.svg";
import postgresIcon from "../assets/postgresql.svg";
import prismaIcon from "../assets/prisma.svg";
import gitIcon from "../assets/git.svg";
import DockerIcon from "../assets/docker.svg";
import figmaIcon from "../assets/figma.svg";
function SkillPanel() {
  const skills = [
    {
      name: "HTML",
      icon: HtmlIcon,
    },
    {
      name: "CSS",
      icon: CssIcon,
    },
    {
      name: "JavaScript",
      icon: JsIcon,
    },
    {
      name: "Tailwind",
      icon: TailwindIcon,
    },
    {
      name: "Bootstrap",
      icon: BootstrapIcon,
    },
    {
      name: "React",
      icon: ReactIcon,
    },
    {
      name: "Redux",
      icon: ReduxIcon,
    },
    {
      name: "Next",
      icon: NextIcon,
    },
    {
      name: "Vue",
      icon: VueIcon,
    },
    {
      name: "Firebase",
      icon: firebaseIcon,
    },
    {
      name: "Node Js",
      icon: nodeJsIcon,
    },

    {
      name: "Express",
      icon: expressIcon,
    },
    {
      name: "TypeScript",
      icon: typeScriptIcon,
    },
    {
      name: "MongoDB",
      icon: mongoDBIcon,
    },
    {
      name: "PostgreSQL",
      icon: postgresIcon,
    },
    {
      name: "Prisma",
      icon: prismaIcon,
    },
    {
      name: "Git",
      icon: gitIcon,
    },
    {
      name: "Docker",
      icon: DockerIcon,
    },
    {
      name: "Figma",
      icon: figmaIcon,
    },
  ];
  return (
    <>
      <div className="w-1/2 m-auto">
        {/* top text  */}
        <div className="">
          <h1 className="font-extrabold text-textThemeColor text-6xl text-center">
            Tech Stack{" "}
          </h1>
          <p className="text-center text-textWhiteColor">
            These are my skills on the basis of which i have made projects.
          </p>
        </div>
        {/* skills  */}
        <div className="mt-16">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-5 gap-20">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2"
              >
                <img src={skill.icon} alt={skill.name} className="w-20" />
                <p className="text-white font-bold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillPanel;
