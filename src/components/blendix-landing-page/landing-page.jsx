import React from "react";
import ClickBlendix from "../../assets/icon/clickBlendix.jsx";
import BlendixPencil from "../../assets/icon/blendixPencil.jsx";
import BlendixTwitter from "../../assets/icon/blendixTwitter.jsx";
import BlendixLinkedln from "../../assets/icon/blendixLinkedln.jsx";
import BlendixBehance from "../../assets/icon/blendixBehance.jsx";
import LandingPgImg from "../../assets/icon/landingPgImg.jsx";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col pt-[120px] gap-8 md:flex-row items-center md:gap-[80px] justify-end mx-auto md:pt-[120px]">
      {/* Left Section */}
      <div className="w-full flex justify-center items-center md:w-[40%] flex-col pt-[40px] md:pt-[120px]">
        <ClickBlendix />

        <div className="w-full flex flex-col justify-center items-center gap-2 md:items-start">
          <h1 className="w-[40%] m:w-full mm:text-[34px] sm:text-[40px] md:w-full text-[30px] md:text-[33px] leading-tight text-center md:text-start">
            Designing, Impactful Digital Experiences.
          </h1>

          <p className="w-[65%] m:w-[95%] font-normal text-[14px] mm:text-[15px] sm:text-[16px] md:text-[14.5px] text-center md:text-start">
            I specialize in turning complex ideas into intuitive user
            experiences that drive impact. From startups to edtech platforms, I
            create products that not only look good, but work beautifully.
          </p>

          <p className="text-dix_yellow text-[14px] mm:text-[15px] sm:text-[16px] md:text-[16px] text-center md:text-start leading-none">
            Let’s build something users will love.
          </p>
        </div>

        <div className="w-full hidden md:flex items-center gap-6 mt-6">
          <BlendixTwitter />
          <BlendixBehance />
          <BlendixLinkedln />
        </div>

        <BlendixPencil />
      </div>

      {/* Right Section */}
      <div className="w-[78%] md:w-[47%] md:mt-0 m:mt-2 mm:mt-4 sm:mt-6">
        <LandingPgImg />
      </div>
    </div>
  );
};

export default LandingPage;
