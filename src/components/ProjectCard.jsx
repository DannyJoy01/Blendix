import React from "react";
import ViewBtn from "../assets/icon/vpBtn.jsx";

const ProjectCard = ({ project }) => {
  const {
    title,
    type,
    description,
    status,
    FrameComponent,
    LogoComponent,
    ViewButtonComponent
  } = project;

  return (
    <div className="w-[95%] flex justify-center rounded-3xl md:flex md:justify-center md:rounded-lg">
      <FrameComponent />
      <div className="w-[42%] h-[330px] pt-[38px] flex  md:w-[36%] md:h-[574px]  md:flex flex-col p-7 md:pt-[56px] md:justify-between bg-dix_grey rounded-tr-xl rounded-br-xl">
        <LogoComponent />
        <div className="flex flex-col gap-3 text-start">
          <h1 className="text-[12.5px]">
            <span className="text-[25px]">{title}</span> • {type}
          </h1>
          <p className="text-[12.9px]  font-normal font-inter">{description}</p>
          {status && (
            <p className="w-[260px] p-3 mt-10 rounded-full text-xs text-center bg-dix_lightGreen">
              {status}
            </p>
          )}
        </div>
        <div className="">
          {ViewButtonComponent && <ViewButtonComponent />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;