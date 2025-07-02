import React from "react";
import landingPageImage from "../../assets/icon/lnd_page_image.svg";
const LandingPgImg = () => {
  return (
    <div className="w-full">
      <img
        src={landingPageImage}
        alt="Landing Page"
        className="w-full max-w-[900px] h-auto mx-auto"
      />
    </div>
  );
};

export default LandingPgImg;
