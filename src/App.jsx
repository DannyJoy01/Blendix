import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/homePage.jsx";
import AboutPage from "./pages/About-Page/aboutPage.jsx";
import ContactPage from "./pages/Contact-Page/contactPage.jsx"; 
function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
  );
}

export default App;
