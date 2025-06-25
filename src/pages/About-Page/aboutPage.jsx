import React from 'react'
import Nav from '../../components/nav/Nav';
import AboutIntro from '../../components/About-Intro/aboutIntro.jsx';
import Teaching from '../../components/Teaching/teaching.jsx';
import Footer from '../../components/Footer/footer.jsx';
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
