const IntroPage = () => {
  return (
    <div className="w-full flex justify-center items-center font-pop pt-10 md:pt-[20px] pb-24 md:pb-[40px]">
      <div className="w-[85%] md:w-[73%] lg:w-[65%] bg-dix_blue p-8 md:p-14 rounded-3xl flex flex-col justify-center gap-5 items-start text-start min-h-[300px]">
        <h1
          className="mt-[-25px] font-normal text-[26px] sm:text-[28px] md:text-[32px] 
  font-inter text-dix_yellow tracking-wide"
        >
          Intro...
        </h1>

        <p className="text-dix_white text-[17px] md:text-[18px] !font-light leading-relaxed md:leading-[30px]">
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
