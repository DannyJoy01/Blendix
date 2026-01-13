import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/homePage.jsx";
import AboutPage from "./pages/About-Page/aboutPage.jsx";
import ContactPage from "./pages/Contact-Page/contactPage.jsx";
import CaseStudyPage from "./pages/Case-Study-Page/CaseStudyPage.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
  return (
    <>
      {/* 👇 This listens for route changes */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
      </Routes>
    </>
  );
}

export default App;
