import React from "react";

const IntroPage = () => {
  return (
    <div className="w-full pt-[330px] pb-[200px] h-[280px] md:h-[350px] m:pt-[350px] flex justify-center items-center font-pop">
      <div className="w-[86%] md:w-[73%] m:w-full bg-dix_blue p-14 m:p-12 md:p-18 h-[450px] md:h-[380px] m:h-[390px] rounded-3xl md:rounded-2xl flex flex-col justify-center gap-5 items-start text-start">
        <h1 className="font-bold text-[30px] m:text-[26px] md:text-[32px] font-inter text-dix_yellow">
          Intro...
        </h1>
        <p className="font-mtn text-[18px] m:text-[20px] font-normal leading-[27px] m:leading-[22px] md:leading-[30px]">
          I am a creative thinker and problem solver who thrives in
          collaborative environments. My design journey began with a strong
          foundation in user-centered design principles, which I've consistently
          applied to every project I've worked on. I am dedicated to crafting
          intuitive and visually appealing interfaces that resonate with users
          while achieving business objectives.
        </p>
      </div>
    </div>
  );
};

export default IntroPage;
