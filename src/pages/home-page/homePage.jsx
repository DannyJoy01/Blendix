import React from 'react'
import Nav from '../../components/nav/Nav'
import LandingPage from '../../components/blendix-landing-page/landing-page';
import IntroPage from '../../components/introduction/introPage';
import ProjectPage from '../../components/project-page/projectPage';
import SubWorkPage from '../../components/sub-work/subWorkPage';
import Teaching from '../../components/teaching/teaching.jsx';
import Footer from '../../components/footer/Footer.jsx';
const HomePage = () => {
  return (
    <div>
      <Nav />
      <LandingPage />
      <IntroPage />
      <ProjectPage />
      <SubWorkPage />
      <Teaching />
      <Footer />
    </div>
  )
}

export default HomePage;
