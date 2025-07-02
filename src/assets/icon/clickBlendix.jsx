import React from "react";
import clickBlendix from "../../assets/icon/click_blendix.svg";
const ClickBlendix = () => {
  return (
    <div className="w-full flex justify-end">
      <img
        src={clickBlendix}
        alt="Click Blendix"
        className="hidden md:block w-[110px] "
      />
    </div>
  );
};

export default ClickBlendix;