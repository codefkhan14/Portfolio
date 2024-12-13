import React from "react";
import bandhejhub from "../bandhejhub.png";
import GithubIcom from "../assets/github.svg";
import WebsiteIcom from "../assets/website.svg";
function ProjectPanel() {
  const Projects = [
    {
      title: "Bandhej Hub",
      description:
        "Bandhej Hub is an ecommerce platform specializing in bandhani products Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi",
      github: "http://localhost:3000/Project",
      live: "http://localhost:3000/Project",
    },
    {
      title: "Bandhej Hub",
      description:
        "Bandhej Hub is an ecommerce platform specializing in bandhani products Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi",
      github: "http://localhost:3000/Project",
      live: "http://localhost:3000/Project",
    },
    {
      title: "Bandhej Hub",
      description:
        "Bandhej Hub is an ecommerce platform specializing in bandhani products Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi",
      github: "http://localhost:3000/Project",
      live: "http://localhost:3000/Project",
    },
    {
      title: "Bandhej Hub",
      description:
        "Bandhej Hub is an ecommerce platform specializing in bandhani products Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi",
      github: "http://localhost:3000/Project",
      live: "http://localhost:3000/Project",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center px-[150px] bg-backgroundColor py-32 pb-56">
        <h1 className="font-bold text-white text-7xl text-center">
          Our Projects
        </h1>
        <p className="text-center text-textWhiteColor pt-2">
          This collection showcases projects highlighting skills and expertise
          applied in real-world scenarios.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {Projects.map((item) => (
            <ProjectCard key={item.title} project={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectPanel;

const ProjectCard = ({ project }) => {
  return (
    <div className="border-2 border-textWhiteColor p-3 shadow-md w-[350px] rounded-xl">
      {/* image  */}
      <img src={bandhejhub} className="border" alt="Loading..." />
      {/* details  */}
      <div className="p-2">
        {/* title  */}
        <h5 className="font-bold text-2xl mt-2 text-white">
          {project.title}
        </h5>
        {/* about   */}
        <p className="text-base text-start text-textWhiteColor pt-4">
          {project.description}
        </p>
        {/* icon  */}
        <div className="flex items-center justify-end gap-2 pt-4">
          <a href={project.github}>
            <img src={GithubIcom} alt="load.." srcset="" className="w-6" />
          </a>
          <a href={project.live}>
            <img src={WebsiteIcom} alt="load.." srcset="" className="w-10" />
          </a>
        </div>
      </div>
    </div>
  );
};
