import React from 'react';
import {ocean, aquamarine } from '../colors';
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
        <p>After I took a comp sci elective in undergrad, I went to all the hackathons, implemented computational models of learning and modelled my life on becoming a developer.</p>
        <p>I want to solve meaningful problems so I did a masters in electronic health specializing in computer science.</p>
        <p>Other than that I believe: Varieties the spice of life. Doing anything 24/7 gets old. Therefore: </p>
        <p>
          Kizomba (An angolan social partner dance) to keep sharp. Remembering steps, learning new ones, and leading all of them with a following dancer <br/>
          Yoga to stay fit and keep a regular meditation practice<br/>
          Cooking + reverse engineering the food I try because food is delicious<br/>
        </p>
      </AboutMeWrapper>
  );
}