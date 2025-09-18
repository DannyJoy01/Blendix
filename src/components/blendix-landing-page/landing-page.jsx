import ClickBlendix from "../../assets/icon/clickBlendix.jsx";
import BlendixPencil from "../../assets/icon/blendixPencil.jsx";
import BlendixTwitter from "../../assets/icon/blendixTwitter.jsx";
import BlendixLinkedln from "../../assets/icon/blendixLinkedln.jsx";
import BlendixBehance from "../../assets/icon/blendixBehance.jsx";
import LandingPgImg from "../../assets/icon/landingPgImg.jsx";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 md:pt-20 lg:pt-[120px] gap-8 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-[80px] max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col items-center md:items-start justify-center space-y-6 md:space-y-8 pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-[80px]">
        {/* Logo */}
        <div className="w-full flex justify-center md:justify-start">
          <ClickBlendix />
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col items-center md:items-start space-y-4 md:space-y-6">
          <h1 className="w-full max-w-md md:max-w-none text-2xl text-dix_white sm:text-3xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold leading-tight text-center md:text-left">
            Designing, Impactful Digital Experiences.
          </h1>

          <p className="w-full text-dix_white max-w-lg md:max-w-none font-normal text-sm sm:text-base md:text-sm lg:text-base text-center md:text-left leading-relaxed">
            I specialize in turning complex ideas into intuitive user
            experiences that drive impact. From startups to edtech platforms, I
            create products that not only look good, but work beautifully.
          </p>

          <p className="text-dix_yellow text-sm sm:text-base md:text-base lg:text-lg text-center md:text-left font-medium">
            Let's build something users will love.
          </p>
        </div>

        {/* Social Links - Hidden on mobile, shown on lg screen */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-6 mt-4 lg:mt-6">
          <div className="hover:scale-110 transition-transform duration-200">
            <BlendixTwitter />
          </div>
          <div className="hover:scale-110 transition-transform duration-200">
            <BlendixBehance />
          </div>
          <div className="hover:scale-110 transition-transform duration-200">
            <BlendixLinkedln />
          </div>
        </div>

        {/* Pencil Icon */}
        <div className="w-full flex justify-center md:justify-start mt-4 md:mt-6">
          <BlendixPencil />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[50%] lg:w-[55%] flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <LandingPgImg />
        </div>
      </div>

      {/* Mobile Social Links */}
      <div className="flex md:hidden items-center justify-center gap-6 mt-8 pb-8">
        <div className="hover:scale-110 transition-transform duration-200">
          <BlendixTwitter />
        </div>
        <div className="hover:scale-110 transition-transform duration-200">
          <BlendixBehance />
        </div>
        <div className="hover:scale-110 transition-transform duration-200">
          <BlendixLinkedln />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;