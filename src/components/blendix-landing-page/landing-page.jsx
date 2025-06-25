import React from "react";
import ClickBlendix from "../../assets/icon/clickBlendix.jsx";
import BlendixPencil from "../../assets/icon/blendixPencil.jsx";
import BlendixTwitter from "../../assets/icon/blendixTwitter.jsx";
import BlendixLinkedln from "../../assets/icon/blendixLinkedln.jsx";
import BlendixBehance from "../../assets/icon/blendixBehance.jsx";
import LandingPgImg from "../../assets/icon/landingPgImg.jsx";

const LandingPage = () => {
  return (
    <div className="w-full pt-[120px] md:pt-[90px] flex justify-end items-center gap-16 md:gap-20 mx-auto">
      <div className="w-[35%] flex flex-col pt-[120px] md:pt-[100px]">
        <ClickBlendix />

        <div className="w-[90%] md:w-full flex flex-col gap-2 text-start">
          <h1 className="text-[45px] md:text-[40px] leading-tight">
            I’m <span className="text-dix_yellow">Olabanji</span>, a Product
            Designer
          </h1>
          <p className="w-[73%] md:w-[67%] font-normal text-[15px] md:text-[12.5px]">
            Designing Digital Experiences That Resonate & Convert.
          </p>
        </div>

        <div className="flex items-center gap-6 mt-6">
          <BlendixTwitter />
          <BlendixBehance />
          <BlendixLinkedln />
        </div>

        <BlendixPencil />
      </div>

      {/* Right Section */}
      <div className="w-[50%]">
        <LandingPgImg />
      </div>
    </div>
  );
};

export default LandingPage;
