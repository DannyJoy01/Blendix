import ContactImage from "../../assets/image/contact_img.svg";
import EmailVector from "../../assets/icon/email_vector.svg";
import DailVector from "../../assets/icon/dial_vector.svg";
const ContactDetails = () => {
  return (
    <div className="w-full flex flex-col justify-center font-mont pt-10 md:pt-20">
      {/* Header section */}
      <div className="flex flex-col items-center justify-center p-4 md:p-20 gap-3 text-center mt-12 md:mt-0">
        <h2 className="text-dix_orange font-mtn text-xl md:text-3xl">
          Connect with me
        </h2>
        <p className="w-full md:w-[60%] lg:w-[42%] text-sm md:text-[17px] text-dix_white leading-5 md:leading-7 lg:leading-8">
          I am always excited to explore new opportunities and collaborate on
          innovative projects.
        </p>
      </div>


      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-4 px-4">
        {/* Image section */}
        <div className="w-full md:w-[45%] lg:w-[38%] rounded-2xl">
          <img src={ContactImage} alt="Contact" className="w-full h-full object-cover" loading="lazy" />
        </div>
        {/* Contact details section */}
        <div className="w-full md:w-[50%] lg:w-[42%] flex flex-col text-start gap-4 md:gap-6 font-inter p-6 md:p-12 shadow-xl bg-nav_bg rounded-xl">
          <div className="w-full gap-3">
            <p className="text-[13px] md:text-[15px] text-dix_white leading-relaxed">
              If you'd like to get in touch or discuss potential collaborations,
              please feel free to contact me.
            </p>
            <h2 className="text-[17px] md:text-[19px] text-dix_white font-semibold mt-2">
              Connect on{" "}
              <a
                href="https://www.linkedin.com/in/olabanji-abiola-396aa7169/"
                className="text-dix_hoverBlue visited:text-purple-700 underline"
                target="_blank"
                rel="Linked Profile"
              >
                LinkedIn
              </a>
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 text-dix_white">
            <p className="flex items-center gap-3 text-sm md:text-base">
              <img src={EmailVector} alt="Email" className="w-[15px]" />
              <a href="mailto:4designspacce@gmail.com" target='_blank'>4designspacce@gmail.com</a>
            </p>
            <p className="flex flex-wrap items-center gap-3 text-sm md:text-base">
              <img src={DailVector} alt="Phone" className="w-[17px]" />
              <a href="tel:+2348111883671" className="whitespace-nowrap">(+234) 811 1883 671</a>
              <a href="tel:+2349077489627" className="whitespace-nowrap">(+234) 907 7489 627</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;