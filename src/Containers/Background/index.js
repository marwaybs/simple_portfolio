import React from 'react';
import { purp1, purp2,  yellow1 } from '../colors';
import styled from 'styled-components'
import Navigation from './Navigation';

const BackgroundWrapper = styled.div`
background-color: ${purp1};
background-image: linear-gradient(${purp1}, ${yellow1});

margin: 0px;
text-align: center;
padding: 100px;
border-bottom: 5px solid ${yellow1};
color: white;
`

const Title = styled.p`
  margin: 0px;
  font-size: 40px;
`

const SubTitle = styled.p`
  font-size: 30px;
`

export default function Intro() {
  return (
      <BackgroundWrapper>
        <Title>
          Bhaag Marway
        </Name>
        <SubTitle>
          Full Stack Developer
        </SubTitle>
        <Navigation/>
      </BackgroundWrapper>
  );
}