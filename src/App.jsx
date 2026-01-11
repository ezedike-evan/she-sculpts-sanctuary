import './App.css'
import AboutMeDesktop from './component/aboutMeDesktop'
import AboutMeMobile from './component/aboutMeMobile'
import ContactMe from './component/contactMe'
import Footer from './component/footer'
import Intro from './component/intro'
import NavBarDesktop from './component/navBarDesktop'
import NavBarMobile from './component/navBarMobile'
import Quote from './component/quote'
import SuccessStories from './component/successStories'
import WorkOut from './component/workout'

const App = () => {
  return (
    <>
      <div className="desktop-view">
        <NavBarDesktop />
      </div>
      <div className="mobile-view">
        <NavBarMobile />
      </div>

      <Intro />
      <Quote />

      <div id="about-me">
        <div className="desktop-view">
          <AboutMeDesktop />
        </div>
        <div className="mobile-view">
          <AboutMeMobile />
        </div>
      </div>

      <WorkOut />

      <SuccessStories />

      <ContactMe />
      <Footer />
    </>
  )
}

export default App