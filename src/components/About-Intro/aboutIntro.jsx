import AboutImage from "../../assets/image/about_me_img.svg";
const AboutIntro = () => {
  return (
    <div className="w-full flex flex-col justify-evenly gap-[80px] place-content-start h-[130vh] font-mtn">
      <div className=" flex flex-col gap-3 font-mont justify-center items-center w-full pt-[180px]">
        <p className="text-dix_orange font-semibold">-hello</p>
        <h1 className="text-[40px] text-dix_white font-bold">I'm OLABANJI</h1>
      </div>

      {/*  */}
      <div class="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full px-4 md:px-8 lg:px-16">
        {/* Left: Image */}
        <div class="w-full md:w-[40%] lg:w-[33%] overflow-hidden rounded-xl">
          <img
            src={AboutImage}
            alt="About Me"
            class="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </div>

        {/* Right: Text Content */}
        <div class="w-full md:w-[55%] lg:w-[40%] flex p-5 md:p-6 shadow-xl bg-nav_bg rounded-xl">
          <div class="flex flex-col text-start gap-4 md:gap-6 text-dix_txtWhite font-mont">
            <h2 class="font-inter text-dix_orange font-semibold text-lg md:text-xl">
              About Me
            </h2>

            <p class="text-dix_txtWhite text-[13px] md:text-[14px] lg:text-[15px] leading-6 md:leading-7 font-medium">
              Experienced senior product designer with over 5 years experience in EdTech,
              SAAS, e-commerce, and fintech industry. I am a creative thinker and
              problem solver who thrives in collaborative environments. My design
              journey began with a strong foundation in user-centered design
              principles, which I've consistently applied to every project I've
              worked on.
            </p>

            <p class="text-dix_txtWhite text-[13px] md:text-[14px] lg:text-[15px] leading-6 md:leading-7 font-medium">
              I am dedicated to crafting intuitive and visually appealing interfaces
              that resonate with users while achieving business objectives.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutIntro;
