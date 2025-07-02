import React from "react";

const Teaching = () => {
  return (
    <div className="w-full pb-[100px] flex justify-center pt-[140px]">
      <div className="w-[85%] h-[400px]  md:w-[75%] md:h-[540px] relative rounded-lg overflow-hidden flex justify-center items-center">
        {/*  */}
        <div className="absolute inset-0 bg-[url('/teaching_bg.svg')] bg-cover bg-center transition-transform duration-[2000ms] ease-in-out scale-100 hover:scale-110 z-0" />

        {/* Overlay image */}
        <img
          src="/overlay_image.svg"
          alt="Overlay"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
        />

        {/*  */}
        <div className="w-[70%] md:w-[55%] gap-12 flex items-center justify-between relative z-20 text-white">
          <div className="w-[15%] md:w-[30%] flex flex-wrap">
            <h1 className="text-[45px] leading-none">Brace yourself.</h1>
          </div>
          <div className="w-[45.5%] flex flex-wrap font-pop text-start">
            <p className="leading-[20px] md:text-[20.8px] md:leading-[24px] font-mont">
              When I'm not pushing pixels or brainstorming new features, you'll
              find me teaching product design and mentoring aspiring designers.
              Seeing those "aha!" moments light up in my students' eyes is pure
              gold.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
