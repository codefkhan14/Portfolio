import React from "react";
import GithubIcom from "../assets/github.svg";
import WebsiteIcom from "../assets/website.svg";

function ProjectPanel() {
  const Projects = [
    {
      title: "Bandhej Hub",
      description:
        "An eCommerce platform specializing in Bandhani products, offering a seamless shopping experience for traditional handcrafted textiles.",
      live: "https://bandhejhub.tech/",
      image: "/bandhejhub.png",
    },
    {
      title: "Bandhej Hub - Seller ",
      description:
        "A dedicated platform for sellers to manage and showcase their products, streamlining sales and inventory.",
      live: "https://seller.bandhejhub.tech/",
      image: "/BandhejhubSeller.png",
    },
    {
      title: "Proacademy",
      description:
        "Bandhej Hub is an ecommerce platform specializing in bandhani products Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi",
      live: "https://proacademy.vercel.app",
      image: "/proacademy.jpeg",
    },
    {
      title: "College Website",
      description:
        "Bandhej Hub is an ecommerce platform specializing in bandhani products Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi",
      live: "https://soe-jnu.vercel.app/",
      image: "/soe-jnu.jpeg",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 sm:px-12 md:px-24 lg:px-32 bg-backgroundColor py-16 pb-32">
      <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl text-center">
        My Projects
      </h1>
      <p className="text-center text-textWhiteColor pt-2 text-sm sm:text-base">
        This collection showcases projects highlighting skills and expertise
        applied in real-world scenarios.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
        {Projects.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPanel;

const ProjectCard = ({ project }) => {
  return (
    <div className="border-2 border-textWhiteColor p-4 shadow-md w-full max-w-[350px] rounded-xl flex flex-col items-center">
      {/* Image */}
      <img
        src={project.image}
        className="w-full h-48 object-cover rounded-md "
        alt="Project"
      />

      {/* Project Details */}
      <div className="mt-4 h-48 flex flex-col items-center justify-between">
        <div>
          <h5 className="font-bold text-2xl text-white text-center">
            {project.title}
          </h5>
          <p className="text-base text-textWhiteColor pt-2 text-center">
            {project.description}
          </p>
        </div>
        {/* Icon Links */}
        <div>
          <a href={project.live} target="_blank" rel="noreferrer">
            <img src={WebsiteIcom} alt="Website" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};
