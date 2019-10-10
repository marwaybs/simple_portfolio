import React from 'react';
import styled from 'styled-components';
import { technologyList, lessBestList } from './data';
import { phoneSize } from './../../Components/breakpoints';

const SkillsWrapper = styled.div`
  margin: 0px;
  text-align: center;
  padding: 75px;
  @media screen and (max-width: ${phoneSize}) {
    padding: 20px
  }
`

const Title = styled.p`
  margin: 0px;
  font-size: 40px;
`

const TechnologyWrapper = styled.div`
  display: inline-flex;
`;

const Technology = styled.p`
  padding: 10px;
  @media screen and (max-width: ${phoneSize}) {
    padding: 5px
  }
`;

const Text = styled.p`
  padding: 10px;
  @media screen and (max-width: ${phoneSize}) {
    padding: 5px
  }
`;

export default function Skills() {
  const technologies = technologyList.map((tech) => 
    <Technology>{tech}</Technology>
  )
  const lessBestTech = lessBestList.map((tech) => 
  <Technology>{tech}</Technology>
)
  return (
      <SkillsWrapper id="Skills">
        <Title>
          Skills
        </Title>
        <TechnologyWrapper>
          {technologies}
        </TechnologyWrapper>
        <Text>What I know less best:</Text>
        <TechnologyWrapper>
          {lessBestTech}
        </TechnologyWrapper>

      </SkillsWrapper>
  );
}