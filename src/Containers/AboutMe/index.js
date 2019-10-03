import React from 'react';
import {ocean, aquamarine, light } from '../colors';
import styled from 'styled-components'

const AboutMeWrapper = styled.div`
background-image: linear-gradient(${aquamarine}, ${ocean});
margin: 0px;
text-align: center;
padding: 100px;
`;

const Title = styled.p`
  margin: 0px;
  font-size: 40px;
`;

const SubTitle = styled.p`
  font-size: 30px;
`;

export default function Intro() {
  return (
      <AboutMeWrapper id="AboutMe">
        <Title>
          About Me
        </Title>
        <SubTitle>
          Science major who found programming
        </SubTitle>
      </AboutMeWrapper>
  );
}