import React from "react";
import arrowForward from "../../assets/icon/arc_arrowfw.svg";
import designCards from "../../data/designCards";

const SubWorkPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 pt-[180px] px-4">
      <p className="text-2xl md:text-3xl text-dix_white text-center">
        I do graphics design too.
      </p>

      <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 md:gap-9">
        {designCards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] md:w-[30%] flex flex-col rounded-xl shadow-xl bg-nav_bg"
          >
            {/* Image */}
            <div className="w-full h-[200px] sm:h-[250px] md:h-[330px]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
              />
            </div>

            {/* Text Content */}
            <div className="w-full flex flex-col items-start text-start p-5 font-inter gap-3">
              <p className="text-sm md:text-base text-dix_white font-semibold">
                {card.title}
              </p>
              <p className="text-[11px] md:text-[12.5px] text-dix_txtWhite font-light w-full border-b-nt_col border-b-[0.1px]">
                {card.description}
              </p>
              <button
                className={`flex justify-between items-center w-full text-[11.2px] md:text-[12.2px] text-dix_white font-light md:font-medium pt-3 ${card.gapClass}`}
              >
                <span>{card.buttonText}</span>
                <img src={arrowForward} alt="Arrow Forward" className="w-3 h-3 md:w-4" />
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubWorkPage;
