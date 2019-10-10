import React from 'react';
import { dark } from '../../Components/colors';
import styled from 'styled-components'
import { projectData } from './data'

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  display: none;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;


const ProjectWrapper = styled.a`
  text-align: center;
  border: 2px solid ${dark};
  height: 200px;
  min-height: 200px;
  min-width: 200px;
  max-width: 200px;
  flex: 1;
  margin: 5px;
  text-decoration: none;
  :hover {
    cursor: pointer;
    ${InfoWrapper} {
      display: unset;
    }
    ${Image} {
      display: none;
    }
  }
`

const Subtitle = styled.p`
  margin: 0;
  font-size: 20px;
`;

const Description = styled.p`
  font-size: 12px;
`

const Technologies = styled.p`
  font-size: 10px;
  color: grey;
`

export default function Projects() {
  const projects = projectData.map((project) => 
  <ProjectWrapper href = {project.link}>
    <InfoWrapper>
      <Subtitle>{project.subtitle}</Subtitle>
      <Description>{project.description}</Description>
      <Technologies>{project.technologies}</Technologies>
    </InfoWrapper>
    <Image src={project.image} />
  </ProjectWrapper>
  )
  return (
      <ProjectsWrapper>
        {projects}
      </ProjectsWrapper>
  );
}