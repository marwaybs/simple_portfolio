import React from 'react';
import styled from 'styled-components';
import Education from './Education';
import Experience from './Experience';

const BackgroundWrapper = styled.div`
margin: 0px;
text-align: center;
padding: 100px;
`;

export default function Intro() {
  return (
      <BackgroundWrapper id="Background">
        <Education />
        <Experience />
      </BackgroundWrapper>
  );
}