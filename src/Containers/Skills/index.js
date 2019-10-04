import React from 'react';
import { } from '../../Components/colors';
import styled from 'styled-components'

const SkillsWrapper = styled.div`
margin: 0px;
text-align: center;
padding: 75px;
`

const Title = styled.p`
  margin: 0px;
  font-size: 40px;
`

const SubTitle = styled.p`
  font-size: 30px;
`

const TechnologyWrapper = styled.div`
  display: inline-flex;
`;

const Technology = styled.p`
  padding: 10px;
`;

const Text = styled.p`
  padding: 10px;
`;

export default function Skills() {
  return (
      <SkillsWrapper id="Skills">
        <Title>
          Skills
        </Title>
        <TechnologyWrapper>
          <Technology>React/Redux</Technology>
          <Technology>Ruby on Rails</Technology>
          <Technology>Python</Technology>
        </TechnologyWrapper>
        <Text>What I know less best:</Text>
        <TechnologyWrapper>
          <Technology>PHP - cakePHP</Technology>
          <Technology>Android</Technology>
          <Technology>iOS</Technology>
          <Technology>Java</Technology>
          <Technology>Matlab</Technology>
          <Technology>R</Technology>

        </TechnologyWrapper>

      </SkillsWrapper>
  );
}