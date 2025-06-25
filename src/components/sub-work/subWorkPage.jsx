import React from "react";
import arrowForward from "../../assets/icon/arc_arrowfw.svg";
import designCards from "../../data/designCards";

const SubWorkPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 pt-[180px]">
      <p className="text-2xl">I do graphics design too.</p>

      <div className="w-full flex flex-row justify-center items-center gap-12">
        {designCards.map((card, index) => (
          <div key={index} className="w-[30%] flex flex-col rounded-xl shadow-xl bg-nav_bg">
            <div className="w-full h-[330px]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
              />
            </div>
            <div className="w-full flex flex-col items-start text-start p-5 font-inter gap-3">
              <p className="text-sm font-semibold">{card.title}</p>
              <p className="text-[12.5px] font-light w-full border-b-nt_col border-b-[0.1px]">
                {card.description}
              </p>
              <button className={`flex text-[12.2px] font-medium items-center pt-3 ${card.gapClass}`}>
                {card.buttonText}
                <img src={arrowForward} alt="Arrow Forward" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubWorkPage;
