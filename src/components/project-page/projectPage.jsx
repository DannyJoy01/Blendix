import React from "react";
import projects from "../../data/products.js";
import ProjectCard from "../ProjectCard.jsx";

const ProjectPage = () => {
  return (
    <div className="w-full mt-[120px] md:mt-[280px] flex flex-col items-center justify-center">
      <div className="w-full flex flex-col gap-3">
        <p className="text-dix_seaBlue text-base font-normal">
          Now, the good stuff.
        </p>
        <h1 className="text-dix_white text-[57px] mb-16">
          My Work
        </h1>
      </div>

      {projects.map ((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectPage;
