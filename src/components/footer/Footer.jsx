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
      <div className="w-[75%] flex flex-col items-center pt-20 lg:pt-12 shadow-xl bg-nav_bg rounded-xl">

        <div className="w-[44%] text-[27px] p-9">
          <p>Designer for 5+ years. I've loved every minute of it.</p>
        </div>

        <div className="w-[85%] flex flex-wrap p-4 gap-[40px] pl-[70px] pb-20 font-inter text-[rgba(255,255,255,0.5)]">
          <div className="flex items-center justify-start text-start text-[17px] gap-4">
            <img src={DixIcon1} alt="Dix Icon 1" className="w-[29px]"/>I enjoy the process
          </div>
          <div className="flex items-center justify-start text-start text-[17px] gap-4 pl-32 ">
            <img src={DixIcon2} alt="Dix Icon 2" className="w-[29px]"/>I know what it means to be on a team
          </div>
          <div className="flex items-center justify-start text-start text-[17px] gap-4">
            <img src={DixIcon3} alt="Dix Icon 3" className="w-[29px]"/>Always curious and always learning
          </div>
        </div>

        <div className="w-full flex items-center pl-[56px] pb-12">
          <div className="w-[30%] flex items-center">
            <img src={BlendixLogo} alt="Blendix Logo" className="w-[50px]" />
          </div>
          <div className="w-[30%] flex justify-center items-center gap-6 pl-24" >
            <img src={BlendixTwitter} alt="Blendix Twitter" className="w-[22px]" />
            <img src={BlendixBehance} alt="Blendix Behance" className="w-[22px]" />
            <img src={BlendixLinkedIn} alt="Blendix LinkedIn" className="w-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
