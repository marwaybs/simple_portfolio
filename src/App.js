import React from 'react';
import Intro from './Containers/Intro';
import AboutMe from './Containers/AboutMe';
import Skills from './Containers/Skills';
import Background from './Containers/Background';
import Projects from './Containers/Projects';


function App() {
  return (
    <div>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Background />
      <Projects />
    </div>
  );
}

export default App;
