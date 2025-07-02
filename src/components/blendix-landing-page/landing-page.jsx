import React from "react";
import ClickBlendix from "../../assets/icon/clickBlendix.jsx";
import BlendixPencil from "../../assets/icon/blendixPencil.jsx";
import BlendixTwitter from "../../assets/icon/blendixTwitter.jsx";
import BlendixLinkedln from "../../assets/icon/blendixLinkedln.jsx";
import BlendixBehance from "../../assets/icon/blendixBehance.jsx";
import LandingPgImg from "../../assets/icon/landingPgImg.jsx";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col pt-[120px] gap-8 md:flex-row justify-end items-center md:gap-16 mx-auto md:pt-[70px] m:flex-col m:justify-center">
      {/* Left Section */}
      <div className="w-full flex justify-center items-center md:w-[40%] flex-col pt-[40px] md:pt-[120px] m:w-full">
        <ClickBlendix />

        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h1 className="w-[40%] text-[50px] leading-tight m:w-full m:text-[30px] mm:text-[34px] sm:text-[40px] md:text-[50px] text-center">
            Designing , Impactful Digital Experiences.
          </h1>

          <p className="w-[65%] font-normal text-[18px] text-center m:w-[95%] m:text-[14px] mm:text-[15px] sm:text-[16px] md:text-[18px]">
            I specialize in turning complex ideas into intuitive user
            experiences that drive impact. From startups to edtech platforms, I
            create products that not only look good, but work beautifully.
          </p>

          <p className="text-dix_yellow text-[16px] leading-none m:text-[14px] mm:text-[15px] sm:text-[16px]">
            Let’s build something users will love.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-6 mt-6">
          <BlendixTwitter />
          <BlendixBehance />
          <BlendixLinkedln />
        </div>

        <BlendixPencil />
      </div>

      {/* Right Section */}
      <div className="w-[78%] md:w-[50%] md:mt-0 m:w-full m:mt-2 mm:mt-4 sm:mt-6">
        <LandingPgImg />
      </div>
    </div>
  );
};

export default LandingPage;
