import React from "react";
import ContactImage from "../../assets/image/contact_img.svg";
import EmailVector from "../../assets/icon/email_vector.svg";
import DailVector from "../../assets/icon/dial_vector.svg";
const ContactDetails = () => {
  return (
    <div className="w-full flex flex-col h-[130vh] font-mont justify-center pt-20">

      <div className="flex flex-col items-center justify-center p-20 gap-3">
        <h2 className="text-dix_orange font-mtn">Connect with me</h2>
        <p className="w-[42%] text-[17px]">
          I am always excited to explore new opportunities and collaborate on
          innovative projects.
        </p>
      </div>

      {/*  */}
      <div className="w-full flex justify-center items-center gap-4">
        <div className="w-[38%] rounded-2xl h-[425px]">
          <img src={ContactImage} alt="Contact" className="w-full h-full" />
        </div>
        {/*  */}
        <div className="w-[42%] h-[425px] flex flex-col text-start gap-6 font-inter p-12  shadow-xl bg-nav_bg rounded-xl">
          <div className="w-full gap-3">
            <p className="text-[15px]">
              If you'd like to get in touch or discuss potential collaborations,
              please feel free to contact me.
            </p>
            <h2 className="text-[19px]">
              connect on{" "}
              <a
                href="https://www.linkedin.com/in/your-profile"
                className="text-dix_hoverBlue visited:text-purple-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="flex gap-3">
              {" "}
              <img src={EmailVector} alt="Email" className="w-[15px]" />{" "}
              4designspacce@gmail.com
            </p>
            <p className="flex gap-3 ">
              {" "}
              <img src={DailVector} alt="Phone" className="w-[17px]" /> (+234)
              811 1883 671 (+234) 907 7489 627
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
