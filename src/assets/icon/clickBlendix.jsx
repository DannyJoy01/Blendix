import React from "react";
import clickBlendix from "../../assets/icon/click_blendix.svg";
const ClickBlendix = () => {
  return (
    <div className="w-full flex justify-end">
      <img
        src={clickBlendix}
        alt="Click Blendix"
        className="w-[140px] md:w-[110px]"
      />
    </div>
  );
};

export default ClickBlendix;