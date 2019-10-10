import React from 'react';
import styled from 'styled-components';
import Projects from './Projects';

const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 75px;
  `

const Title = styled.p`
  margin: 0px;
  font-size: 40px;
  text-align: center;
  padding-bottom: 20px;
`

export default function Intro() {
  return (
      <ProjectsWrapper id="Projects">
        <Title>Projects (WIP)</Title>
        <Projects/>
      </ProjectsWrapper>
  );
}