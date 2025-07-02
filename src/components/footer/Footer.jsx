import React from "react";
import DixIcon1 from "../../assets/icon/dix_circle1.svg";
import DixIcon2 from "../../assets/icon/dix_circle2.svg";
import DixIcon3 from "../../assets/icon/dix_circle3.svg";
import BlendixLogo from "../../assets/icon/blendix-logo.svg";
import BlendixTwitter from "../../assets/icon/blendix_twit.svg";
import BlendixBehance from "../../assets/icon/blendix_behance.svg";
import BlendixLinkedIn from "../../assets/icon/blendix_linkedln.svg";
const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center my-[50px] mx-auto">
      <div className="w-[89%] pt-4 md:w-[75%] flex flex-col items-center md:pt-20 shadow-xl bg-nav_bg rounded-xl">
        {/* mobile view */}
        <div className="w-[80%] pt-6 flex md:hidden justify-start">
          <img src={BlendixLogo} alt="Blendix Logo" className="w-[50px]" />
        </div>

        <div className="w-[65%] text-[25px] md:w-[44%] md:text-[27px] p-9">
          <p>Designer for 5+ years. I've loved every minute of it.</p>
        </div>

        <div className="w-[83%] gap-[40px] flex pl-0 p-0  md:w-[85%] md:flex flex-wrap md:p-4 md:gap-[40px] md:pl-[70px] pb-20 font-inter text-[rgba(255,255,255,0.5)]">
          <div className="text-[13.2px] gap-2 flex items-center justify-start text-start md:text-[17px] md:gap-4">
            <img
              src={DixIcon1}
              alt="Dix Icon 1"
              className="w-[26px] md:w-[29px]"
            />{" "}
            I enjoy the process
          </div>
          <div className="text-[13.2px] pl-[85px]  gap-2 flex items-center justify-start text-start md:text-[17px] md:gap-4 md:pl-32 ">
            <img
              src={DixIcon2}
              alt="Dix Icon 2"
              className="w-[26px] md:w-[29px]"
            />
            I know what it means to be on a team
          </div>
          <div className="text-[13.2px]  gap-2 flex items-center justify-start text-start md:text-[17px] md:gap-4">
            <img
              src={DixIcon3}
              alt="Dix Icon 3"
              className="w-[26px] md:w-[29px]"
            />
            Always curious and always learning
          </div>
          {/* mobile view */}
          <div className="md:w-[30%] flex md:hidden justify-center items-center gap-6 ">
            <img
              src={BlendixTwitter}
              alt="Blendix Twitter"
              className="w-[22px]"
            />
            <img
              src={BlendixBehance}
              alt="Blendix Behance"
              className="w-[22px]"
            />
            <img
              src={BlendixLinkedIn}
              alt="Blendix LinkedIn"
              className="w-[22px]"
            />
          </div>
        </div>

        <div className="hidden md:w-full md:flex items-center md:pl-[56px] pb-12">
          <div className="hidden md:w-[30%] md:flex items-center">
            <img src={BlendixLogo} alt="Blendix Logo" className="w-[50px]" />
          </div>
          <div className="hidden w-[30%] md:flex justify-center items-center gap-6 pl-24">
            <img
              src={BlendixTwitter}
              alt="Blendix Twitter"
              className="w-[22px]"
            />
            <img
              src={BlendixBehance}
              alt="Blendix Behance"
              className="w-[22px]"
            />
            <img
              src={BlendixLinkedIn}
              alt="Blendix LinkedIn"
              className="w-[22px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
