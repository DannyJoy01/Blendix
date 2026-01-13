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
        {/* <div className="w-[80%] pt-6 flex md:hidden justify-start">
          <img src={BlendixLogo} alt="Blendix Logo" className="w-[50px]" />
        </div> */}

        <div className="w-[90%] sm:w-[70%] md:w-[44%] text-base sm:text-lg md:text-[27px] p-6 sm:p-9 text-dix_white leading-7 sm:leading-8 md:leading-10 text-center">
          <p>
            Designer for 7+ years.
            <br className="block md:hidden" /> {/* forces break only on mobile */}
            I've loved every minute of it.
          </p>
        </div>


        <div className="w-[90%] md:w-[85%] flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-10 pb-20 font-inter text-[rgba(255,255,255,0.5)]">
          {/* Item 1 */}
          <div className="flex items-center text-start text-[13.2px] md:text-[17px] gap-2 md:gap-4 w-full md:w-[45%]">
            <img
              src={DixIcon1}
              alt="Dix Icon 1"
              className="w-[24px] md:w-[29px]"
            />
            I enjoy the process
          </div>

          {/* Item 2 */}
          <div className="flex items-center text-start text-[13.2px] md:text-[17px] gap-2 md:gap-4 w-full md:w-[45%]">
            <img
              src={DixIcon2}
              alt="Dix Icon 2"
              className="w-[24px] md:w-[29px]"
            />
            I know what it means to be on a team
          </div>

          {/* Item 3 */}
          <div className="flex items-center text-start text-[13.2px] md:text-[17px] gap-2 md:gap-4 w-full md:w-[45%]">
            <img
              src={DixIcon3}
              alt="Dix Icon 3"
              className="w-[24px] md:w-[29px]"
            />
            Always curious and always learning
          </div>

          {/* Mobile view social icons */}
          <div className="flex md:hidden justify-start gap-6 mt-6">
            <img
              src={BlendixTwitter}
              alt="Blendix Twitter"
              className="w-[20px] sm:w-[22px]"
            />
            <img
              src={BlendixBehance}
              alt="Blendix Behance"
              className="w-[20px] sm:w-[22px]"
            />
            <a
              href="https://www.linkedin.com/in/olabanji-abiola-396aa7169/"
              target="_blank"
            >
              <img
                src={BlendixLinkedIn}
                alt="Blendix LinkedIn"
                className="w-[20px] sm:w-[22px]"
              />
            </a>
          </div>
        </div>

        <div className="hidden md:w-full md:flex md:pl-[56px] pb-12">
          {/* <div className="hidden md:w-[30%] md:flex items-center">
            <img src={BlendixLogo} alt="Blendix Logo" className="w-[50px]" />
          </div> */}
          <div className="ml-5 hidden w-[30%] md:flex gap-6">
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
            <a
              href="https://www.linkedin.com/in/olabanji-abiola-396aa7169/"
              target="_blank"
            >
              <img
                src={BlendixLinkedIn}
                alt="Blendix LinkedIn"
                className="w-[22px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
