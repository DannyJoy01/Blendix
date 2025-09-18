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

  return (
    <div className="w-[90%] flex flex-col rounded-3xl overflow-hidden md:flex-row md:rounded-lg">
      {/* Frame Component (Image Left) */}
      <div className="w-full md:w-[70%] h-[250px] md:h-auto">
        <FrameComponent />
      </div>

      {/* Text Content (Right Section) */}
      <div className="w-full md:w-[30%] flex flex-col justify-between p-7 bg-dix_grey rounded-b-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl">
        <LogoComponent />
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
        <div>{ViewButtonComponent && <ViewButtonComponent href={href} />}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
