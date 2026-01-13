// data/projects.js
// import TribearcLogo from "../assets/icon/tribearcLogo.jsx";
// import LagMallFrame from "../assets/image/lagMallFrame.jsx";
// import LagMallLogo from "../assets/icon/lagMallLogo.jsx";
// import AmanoFrame from "../assets/image/amanoFrame.jsx";
// import AmanoLogo from "../assets/icon/amanoLogo.jsx";
// import TechbitFrame from "../assets/image/techBitFrame.jsx";
// import TechbitLogo from "../assets/icon/techBitLogo.jsx";
// import LearnxploreFrame from "../assets/image/learnXploreFrame.jsx";
// import LearnxploreLogo from "../assets/icon/learnXploreLogo.jsx";
import ViewBtn from "../assets/icon/vpBtn.jsx";
import ViewBtn2 from "../assets/icon/vpBtn2.jsx";
// import QandAFrame from "../assets/image/QandAFrame.jsx";
// import QandALogo from "../assets/icon/QandALogo.jsx";

const projects = [
  {
    id: "case-study1",
    title: "Q & A",
    type: "EdTech Resources app",
    description:
      "Q and A app is a platform for distributing and sourcing for educational resources. The resources are in text, audio and video formats.",
    FrameComponent: () => import("../assets/image/QandAFrame.jsx"),
    LogoComponent: () => import("../assets/icon/QandALogo.jsx"),
    ViewButtonComponent: ViewBtn2,
    image: "/caseStudies/QnAwebp.webp",
  },
  {
    id: "project1",
    title: "Tribearc",
    type: "SAAS product",
    description:
      "Tribearc is a SAAS product that helps users build landing pages, give free offers, capture leads, nurture them with email automation, convert them to customers with time-tested marketing free email copies, sell more digital products, sell online courses with email templates, and more.",
    status: "Case study in progress.....30%",
    FrameComponent: () => import("../assets/image/tribearcFrame.jsx"),
    LogoComponent: () => import("../assets/icon/tribearcLogo.jsx"),
    ViewButtonComponent: ViewBtn,
    href: "https://tribearc.com/",
  },

  {
    id: "case-study2",
    title: "LagMall",
    type: "E-commerce app",
    description:
      "Lagmall is an e-commerce app that provide a real shopping experience, user-friendly online platform that encompasses every corner, enhance the profits of every sales entrepreneur and bring about maximum customer satisfaction.",
    FrameComponent: () => import("../assets/image/lagMallFrame.jsx"),
    LogoComponent: () => import("../assets/icon/lagMallLogo.jsx"),
    ViewButtonComponent: ViewBtn2,
    image: "/caseStudies/lagMall.webp",
  },
  {
    id: "project2",
    title: "AMANO",
    type: "Alumni website",
    description: "The Alumni of Maritime Academy of Nigeria website",
    FrameComponent: () => import("../assets/image/amanoFrame.jsx"),
    LogoComponent: () => import("../assets/icon/amanoLogo.jsx"),
    ViewButtonComponent: ViewBtn,
    href: "https://www.alumniofman.com/",
  },
  {
    id: "project3",
    title: "Techbit",
    type: "Software Engineering service website",
    description:
      "Techbit is a platform offering a range of professional software engineering services,",
    FrameComponent: () => import("../assets/image/techBitFrame.jsx"),
    LogoComponent: () => import("../assets/icon/techBitLogo.jsx"),
    ViewButtonComponent: ViewBtn,
    href: "https://techbitdigital.com/",
  },
  {
    id: "project4",
    title: "Learnxplore ",
    type: "Educational learning app",
    description:
      "The Learnxplore App is an educational learning app for the kids it’s an app that fosters learning on the Go. Learnxplore targets promoting the Sustainable Development Goal Number 4 (SDG4)...",
    status: "Case study in progress..... ",
    FrameComponent: () => import("../assets/image/learnXploreFrame.jsx"),
    LogoComponent: () => import("../assets/icon/learnXploreLogo.jsx"),
  },
];

export default projects;
