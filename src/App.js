import React from 'react'
import HeroComponent from "./components/Hero/Hercomponent";
import Navbar from './components/NavBar/Navbar'
import Navbar2 from "./components/NavBar/Navbar2";
import Content from './components/CourseContent/Content'
import Footer from './components/Footer/FooterComponent'
import FAQ from './components/FAQ/FAQComponent'
import InstructorComponent from './components/Instructor/InstructorComponent'
import BenefitComponent from './components/Benefts/BenefitComponent';
import OverviewComponent from './components/Overview/OverviewComponent'
function App() {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <Navbar2 />
      <br/>
      <OverviewComponent />
      <BenefitComponent />
      <InstructorComponent />
      <InstructorComponent />
      <Content />
      <FAQ />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
