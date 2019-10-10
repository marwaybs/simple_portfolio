import React from 'react';
import styled from 'styled-components';
import { dark } from './Components/colors';
import Intro from './Containers/Intro';
import AboutMe from './Containers/AboutMe';
import Skills from './Containers/Skills';
import Projects from './Containers/Projects';
import Footer from './Containers/Footer';


const Seperator = styled.div`
  border-bottom: 2px solid ${dark};
  width: 60%;
  margin: auto;
`;


function App() {
  return (
    <div>
      <Intro/>
      <AboutMe/>
      <Seperator />
      <Skills/>
      <Seperator />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
