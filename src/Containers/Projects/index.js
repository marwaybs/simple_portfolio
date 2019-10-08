import React from 'react';
import { dark } from '../../Components/colors';
import styled from 'styled-components';
import Projects from './Projects';

const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  `

const ProjectWrapper = styled.div`
  text-align: left;
  border: 2px solid ${dark};
  max-width: 500px
  flex: 1;
`
const Grid = styled.div`
  display: flex;
`;

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
        <Projects/>
      </ProjectsWrapper>
  );
}