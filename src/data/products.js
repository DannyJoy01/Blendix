// data/projects.js
import TribearcFrame from "../assets/image/tribearcFrame.jsx";
import TribearcLogo from "../assets/icon/tribearcLogo.jsx";
import LagMallFrame from "../assets/image/lagMallFrame.jsx";
import LagMallLogo from "../assets/icon/lagMallLogo.jsx";
import AmanoFrame from "../assets/image/amanoFrame.jsx";
import AmanoLogo from "../assets/icon/amanoLogo.jsx";
import TechbitFrame from "../assets/image/techbitFrame.jsx";
import TechbitLogo from "../assets/icon/techbitLogo.jsx";
import LearnxploreFrame from "../assets/image/learnxploreFrame.jsx";
import LearnxploreLogo from "../assets/icon/learnxploreLogo.jsx";
import KoladFrame from "../assets/image/koladFrame.jsx";
import KoladLogo from "../assets/icon/koladLogo.jsx";
import ViewBtn from "../assets/icon/vpBtn.jsx";
import ViewBtn2 from "../assets/icon/vpBtn2.jsx";


const projects = [
  {
    title: "Tribearc",
    type: "SAAS product",
    description:
      "Tribearc is a SAAS product that helps users build landing pages, give free offers, capture leads, nurture them with email automation, convert them to customers with time-tested marketing free email copies, sell more digital products, sell online courses with email templates, and more.",
    status: "Case study in progress.....30%",
    FrameComponent: TribearcFrame,
    LogoComponent: TribearcLogo,
    ViewButtonComponent: ViewBtn,

  },
  {
    title: "LagMall",
    type: "E-commerce app",
    description:
      "Lagmall is an e-commerce app that provide a real shopping experience, user-friendly online platform that encompasses every corner, enhance the profits of every sales entrepreneur and bring about maximum customer satisfaction.",
    FrameComponent: LagMallFrame,
    LogoComponent: LagMallLogo,
    ViewButtonComponent: ViewBtn2,
  },
   {
    title: "AMANO",
    type: "Software Engineering service website",
    description: "The Alumni of Maritime Academy of Nigeria website",
    FrameComponent: AmanoFrame,
    LogoComponent: AmanoLogo,
    ViewButtonComponent: ViewBtn,

  },
   {
    title: "Techbit ",
    type: "SAAS product",
    description:
      "Techbit is a platform offering a range of professional software engineering services,",
    FrameComponent: TechbitFrame,
    LogoComponent: TechbitLogo,
    ViewButtonComponent: ViewBtn,

  },
  {
    title: "Learnxplore ",
    type: "Educational learning app",
    description:
      "The Learnxplore App is an educational learning app for the kids it’s an app that fosters learning on the Go. Learnxplore targets promoting the Sustainable Development Goal Number 4 (SDG4)...",
    status: "Case study in progress..... ",
    FrameComponent: LearnxploreFrame,
    LogoComponent: LearnxploreLogo,

  },
  {
    title: "Koladtowing ",
    type: "towing service website",
    description:
      "Junk cars service offering fast, reliable removal of unwanted vehicles. ",
    FrameComponent: KoladFrame,
    LogoComponent: KoladLogo,
    ViewButtonComponent: ViewBtn2,
  },
];

export default projects;
