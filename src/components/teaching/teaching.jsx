import React from "react";

const Teaching = ({ marginTopClass }) => {
  return (
    <div className={`w-full flex justify-center ${marginTopClass} pt-[100px] md:pt-[140px] pb-[80px] md:pb-[100px] px-4`}>
      <div className="w-full max-w-6xl relative rounded-lg overflow-hidden flex justify-center items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        <img
          src="/teaching_bg.svg"
          alt="Teaching Background"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-in-out scale-100 hover:scale-110 z-0"
        />
        <img
          src="/overlay_image.svg"
          alt="Overlay"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
        />
        <div className="relative z-20 w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-12 text-white px-4 sm:px-8 py-12 mt-12 md:mt-0">
          <div className="w-full md:w-[35%] flex justify-center md:justify-start">
            <h1 className="text-3xl sm:text-4xl md:text-[45px] font-bold text-dix_white leading-tight text-center md:text-left">
              Brace yourself.
            </h1>
          </div>
          <div className="w-full md:w-[55%] font-pop text-start">
            <p className="text-sm sm:text-base md:text-[20.8px] text-dix_white leading-relaxed md:leading-[30px] font-mont text-center md:text-left">
              When I'm not pushing pixels or brainstorming new features, you'll find
              me teaching product design and mentoring aspiring designers. Seeing
              those "aha!" moments light up in my students' eyes is pure gold.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
