import React from 'react';
import { purp1, purp2,  yellow1 } from '../colors';
import styled from 'styled-components'

const ExperienceWrapper = styled.div`
`

const Title = styled.p`
`

const SubTitle = styled.p`
`

const List = styled.ul`

`;

const LI = styled.li`

`;

export default function Experience() {
  return (
      <ExperienceWrapper>
        <Title>
          Education
        </Title>
        <SubTitle>
          Psychology, Neuroscience and Behaviour B.Sc.
        </SubTitle>
        <List>
          <LI>Academic and "pop" (blogs, podcasts etc.) scientific writing</LI>
          <LI>7+ hackathons</LI>
          <LI>All Computer Science electives</LI>
          <LI>Research on Computional Models of Learning</LI>
        </List>
        <SubTitle>
          eHealth (Computer Science Specialization) M.Sc.
        </SubTitle>
        <List>
          <LI></LI>
          <LI>7+ hackathons</LI>
          <LI>All Computer Science electives again</LI>
          <LI>Coded all my stats courses in R</LI>
          <LI>Introduced to the difficulties of desiginig software for non-techy savvy clinicians</LI>
        </List>
      </ExperienceWrapper>
  );
}