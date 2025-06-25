import React from 'react'
import Nav from '../../components/nav/nav.jsx';
import AboutIntro from '../../components/About-Intro/aboutIntro.jsx';
import Teaching from '../../components/teaching/teaching.jsx';
import Footer from '../../components/footer/Footer.jsx';
const AboutPage = () => {
  return (
    <div>
      <Nav />
      <AboutIntro />
      <Teaching />
      <Footer />
    </div>
  )
}

export default AboutPage;
