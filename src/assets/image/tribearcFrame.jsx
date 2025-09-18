import React from "react";
import tribearcFrame from "../../assets/image/tribearc_frame.svg";

const TribearcFrame = () => {
  return (
    <div className="w-full h-full">
      <img
        src={tribearcFrame}
        alt="Tribe Arc Frame"
        className="w-full h-full object-cover rounded-tl-xl md:rounded-bl-xl"
      />
    </div>
  );
};

export default TribearcFrame;
