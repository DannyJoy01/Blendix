import React from "react";
import projects from "../../data/products.js";
import ProjectCard from "../ProjectCard.jsx";

const ProjectPage = () => {
  return (
    <div className="w-full mt-[120px] md:mt-[280px] flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="w-full text-center mb-10">
        <p className="text-dix_green text-[18px] md:text-dix_seaBlue md:text-base font-normal">
          Now, the good stuff.
        </p>
        <h1 className="text-dix_white text-[32px] md:text-[42px] font-bold">
          My Work
        </h1>
      </div>

      {/* Project Cards */}
      <div className="w-full flex flex-col justify-center gap-8 md:gap-12">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-center">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
