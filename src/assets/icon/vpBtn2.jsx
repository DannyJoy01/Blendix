import tribearcIcon from "../../assets/icon/arc_arrowfw.svg";
import { Link } from "react-router-dom";

const ViewBtn2 = ({ project }) => {
  if (!project?.id) return null;
  return (
    <Link to={`/case-study/${project.id}`} target="_blank">
      <button
        type="button"
        aria-label={`View case study for ${project.title}`}
        className="mt-4 w-full sm:w-auto max-w-[270px] px-5 py-3 md:px-6 md:py-4 flex items-center justify-center rounded-full border-dix_lightGreen border-2 hover:bg-dix_hoverGreen duration-500 hover:text-dix_hoverBlue font-inter text-dix_white text-sm md:text-base gap-2 md:gap-3"
      >
        View Case Study
        <img src={tribearcIcon} alt="" className="w-[6px] md:w-[7px] h-auto" />
      </button>
    </Link>
  );
};

export default ViewBtn2;
