import React from 'react'
import MainComponent from './components/MainComponent/MainComponent'
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
      {/* <MainComponent/>*/}
      <Navbar />
      <Navbar2/>
      <Content />
      <Footer />
      <FAQ />
      <InstructorComponent />
      <BenefitComponent />
      <OverviewComponent />
    </>
  );
}

export default App;
