import React, { Suspense } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const {
    title,
    type,
    description,
    status,
    FrameComponent,
    LogoComponent,
    ViewButtonComponent,
    href,
  } = project;

  // Lazy load FrameComponent if provided as a dynamic import
  const LazyFrame = FrameComponent ? React.lazy(FrameComponent) : null;
  const LazyLogo = LogoComponent ? React.lazy(LogoComponent) : null;

  return (
    <motion.div
      className="w-[90%] flex flex-col rounded-3xl overflow-hidden md:flex-row md:rounded-lg"
      initial={{ opacity: 0, y: 50 }}              // start faded & down
      whileInView={{ opacity: 1, y: 0 }}           // animate in when visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}       // triggers when 20% in view
    >
      {/* Frame Component (Image Left) */}
      <div className="w-full md:w-[70%] h-[250px] md:h-auto">
        {LazyFrame && (
          <Suspense fallback={<div className="h-full flex items-center justify-center text-dix_white">Loading...</div>}>
            <LazyFrame />
          </Suspense>
        )}
      </div>

      {/* Text Content (Right Section) */}
      <div className="w-full md:w-[30%] flex flex-col justify-between p-7 bg-dix_grey rounded-b-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl">
        {LazyLogo && (
          <Suspense fallback={<div className="h-full flex items-center justify-center text-dix_white">Loading...</div>}>
            <LazyLogo />
          </Suspense>
        )}
        <div className="flex flex-col gap-3 text-start">
          <h1 className="text-[12.5px] font-mtn font-bold text-dix_white">
            <span className="text-[25px]">{title}</span> • {type}
          </h1>
          <p className="text-[12.9px] text-dix_white font-normal font-inter">
            {description}
          </p>
          {status && (
            <p className="w-full p-3 mt-10 text-dix_white rounded-full text-xs text-center bg-dix_lightGreen">
              {status}
            </p>
          )}
        </div>
        <div>
          {ViewButtonComponent && (
            <ViewButtonComponent project={project} href={href} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
