import React from 'react';
import Intro from './Containers/Intro';
import AboutMe from './Containers/AboutMe';
import Skills from './Containers/Skills';
import Background from './Containers/Background';
import Projects from './Containers/Projects';
import Footer from './Containers/Footer';


function App() {
  return (
    <div>
      <Intro/>
      <AboutMe/>
      <Skills/>
      {/* <Background /> */}
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
