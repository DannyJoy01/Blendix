import tribearcIcon from "../../assets/icon/arc_arrowfw.svg";

const ViewBtn2 = () => {
  return (
    <button
      type="button"
      className="mt-4 w-full max-w-[270px] px-5 py-3 md:px-6 md:py-4 flex items-center justify-center rounded-full border-dix_lightGreen border-2 hover:bg-dix_hoverGreen duration-500 hover:text-dix_hoverBlue font-inter text-dix_white text-sm md:text-base gap-2 md:gap-3"
    >
      View Case Study{" "}
      <img src={tribearcIcon} alt="View" className="w-[6px] md:w-[7px]" />
    </button>
  );
};

export default ViewBtn2;
