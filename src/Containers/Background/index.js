import React from 'react';
import styled from 'styled-components';
import Education from './Education';
import Experience from './Experience';

const BackgroundWrapper = styled.div`
margin: 0px;
text-align: center;
padding: 75px;
`;

export default function Background() {
  return (
      <BackgroundWrapper id="Background">
        <Experience />
        <Education />
      </BackgroundWrapper>
  );
}