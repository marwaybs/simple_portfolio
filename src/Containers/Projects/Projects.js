import React from 'react';
import { dark } from '../../Components/colors';
import styled from 'styled-components'
import { projectData } from './data'


const Grid = styled.div`
  display: flex;
`;

const ProjectWrapper = styled.div`
  text-align: left;
  border: 2px solid ${dark};
  max-width: 500px
  flex: 1;
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

export default function Projects() {
    const projects = projectData.map((project) => 
    <ProjectWrapper>
        <Subtitle>{project.subtitle}</Subtitle>
        <Description>{project.description}</Description>
        <Technologies>{project.technologies}</Technologies>
    </ProjectWrapper>
    )
  return (
      <Grid>
        {projects}
      </Grid>
  );
}