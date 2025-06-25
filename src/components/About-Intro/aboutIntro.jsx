import React from "react";
import AboutImage from "../../assets/image/about_me_img.svg";
const AboutIntro = () => {
  return (
    <div className="w-full flex flex-col justify-evenly gap-[80px] place-content-start h-[130vh] font-mtn">
      <div className=" flex flex-col gap-3 font-mont justify-center items-center w-full pt-[180px]">
        <p className="text-dix_orange font-semibold">-hello</p>
        <h1 className="text-[40px] font-bold">I'm OLABANJI</h1>
      </div>

      {/*  */}
      <div className="flex justify-center gap-4 items-center w-full">
        <div className="w-[33%] h-[430px] overflow-hidden rounded-xl">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </div>

        <div className="w-[40%] h-[470px]  flex p-6 shadow-xl bg-nav_bg rounded-xl">
          <div className="flex flex-col text-start gap-6 text-dix_txtWhite font-mont">
            <h2 className="font-inter text-dix_orange font-medium">About Me</h2>
            <p className="text-dix_txtWhite leading-6 text-[14px] font-medium">
              Experienced senior product designer with 5 years experience in
              EdTech, SAAS, e-commerce, and fintech industry. I am a creative
              thinker and problem solver who thrives in collaborative
              environments. My design journey began with a strong foundation in
              user-centered design principles, which I've consistently applied
              to every project I've worked on.
            </p>
            <p className="text-dix_txtWhite text-[14px] leading-6 font-medium">
              I am dedicated to crafting intuitive and visually appealing
              interfaces that resonate with users while achieving business
              objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
