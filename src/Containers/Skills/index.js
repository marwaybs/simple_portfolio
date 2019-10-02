import React from 'react';
import { } from '../colors';
import styled from 'styled-components'

const SkillsWrapper = styled.div`
margin: 0px;
text-align: center;
padding: 100px;
`

const Title = styled.p`
  margin: 0px;
  font-size: 40px;
`

const SubTitle = styled.p`
  font-size: 30px;
`

export default function Intro() {
  return (
      <SkillsWrapper>
        <Title>
          Skills
        </Title>
        <technologyList>
          
        </technologyList>
      </SkillsWrapper>
  );
}