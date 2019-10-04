import React from 'react';
import { dark } from '../../Components/colors';
import styled from 'styled-components'

const ProjectsWrapper = styled.div`
  max-width: 800px;
  margin: auto;
  `

const ProjectWrapper = styled.div`
  text-align: left;
  max-width: 1000px;
  content-align: center;
  border-bottom: 2px solid ${dark};
`

const Title = styled.p`
  margin: 0px;
  font-size: 40px;
`

const Subtitle = styled.p`
  font-size: 30px;
`;

const Description = styled.p`
  font-size: 15px;
`

const Technologies = styled.p`
  font-size: 15px;
`

export default function Intro() {
  return (
      <ProjectsWrapper id="Projects">
        <Title>Projects:</Title>
        <ProjectWrapper>
          <Subtitle>This Portfolio</Subtitle>
          <Description>A marketting page to market myself</Description>
          <Technologies>React, styled components</Technologies>
        </ProjectWrapper>
        <ProjectWrapper>
          <Subtitle>Contacts App</Subtitle>
          <Description>Exploring the new technologies used with react development. I used react boilerplate and studied and used all of the technologies it recomended</Description>
          <Technologies>React, Redux, Redux Saga, styled components, Ruby on Rails </Technologies>
        </ProjectWrapper>
        <ProjectWrapper>
          <Subtitle>Tic Tac Toe Game</Subtitle>
          <Description>Wanted to build a simple app to explore vanilla js a bit. Felt attached to libraries such as underscore and lodash and wanted to see if vanilla js could replace them.s</Description>
          <Technologies>React, vanilla JS</Technologies>
        </ProjectWrapper>
        <ProjectWrapper>
          <Subtitle>Musicality Trainer</Subtitle>
          <Description>A cross platform mobile app to train musicality for dancing.</Description>
          <Technologies>React Native</Technologies>
        </ProjectWrapper>
      </ProjectsWrapper>
  );
}