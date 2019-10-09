import React from 'react';
import { dark } from '../../Components/colors';
import styled from 'styled-components'
import { projectData } from './data'
import portfolio from './../../Assets/Images/portfolio.png'


const Grid = styled.div`
  display: flex;
`;

const InfoWrapper = styled.div`
  display: none;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;


const ProjectWrapper = styled.div`
  text-align: left;
  border: 2px solid ${dark};
  // max-width: 500px;
  // max-height: 500px;
  height: 200px;
  width: 200px;
  flex: 1;
  margin: 5px;
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
  console.log(projectData);
  const projects = projectData.map((project) => 
  <ProjectWrapper>
    <InfoWrapper>
      <Subtitle>{project.subtitle}</Subtitle>
      <Description>{project.description}</Description>
      <Technologies>{project.technologies}</Technologies>
    </InfoWrapper>
    <Image src={project.image} />
  </ProjectWrapper>
  )
  return (
      <Grid>
        {projects}
      </Grid>
  );
}