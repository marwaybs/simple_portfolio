import React from 'react';
import { } from '../../Components/colors';
import styled from 'styled-components'

const ProjectsWrapper = styled.div`
  margin: 0px;
  text-align: center;
  padding: 100px;
`

const ProjectWrapper = styled.div`
`

const Title = styled.p`
  margin: 0px;
  font-size: 40px;
`

const Description = styled.p`
  font-size: 15px;
`

const Technologies = styled.p`
  font-size: 15px;
`

export default function Intro() {
  return (
      <ProjectsWrapper id="Projects">
        <ProjectWrapper>
          <Title>This Portfolio</Title>
          <Description>A marketting page to market myself</Description>
          <Technologies>React, styled components</Technologies>
        </ProjectWrapper>
        <ProjectWrapper>
          <Title>Contacts App</Title>
          <Description>Exploring the new technologies used with react development. I used react boilerplate and studied and used all of the technologies it recomended</Description>
          <Technologies>React, Redux, Redux Saga, styled components, Ruby on Rails </Technologies>
        </ProjectWrapper>
        <ProjectWrapper>
          <Title>Tic Tac Toe Game</Title>
          <Description>Wanted to build a simple app to explore vanilla js a bit. Felt attached to libraries such as underscore and lodash and wanted to see if vanilla js could replace them.s</Description>
          <Technologies>React, vanilla JS</Technologies>
        </ProjectWrapper>
        <ProjectWrapper>
          <Title>Musicality Trainer</Title>
          <Description>A cross platform mobile app to train musicality for dancing.</Description>
          <Technologies>React Native</Technologies>
        </ProjectWrapper>
      </ProjectsWrapper>
  );
}