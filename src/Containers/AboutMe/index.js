import React from 'react';
import {dark} from '../../Components/colors';
import styled from 'styled-components'

const AboutMeWrapper = styled.div`
margin: 0px;
text-align: center;
padding: 100px;
color: ${dark}
`;

const Title = styled.p`
  margin: 0px;
  font-size: 40px;
`;

const ContentWrapper = styled.div`
  padding-top: 10px;
  display: inline-flex;
  align-items: center;
`;

const SubTitle = styled.span`
  font-size: 30px;
`;

const ListWrapper = styled.ul``;

const ListItem = styled.li`
  list-style-type:none;
`;

export default function AboutMe() {
  return (
      <AboutMeWrapper id="AboutMe">
        <Title>
          About Me
        </Title>
        <ContentWrapper>
          <SubTitle>
            Varieties the spice of life
          </SubTitle>
          <ListWrapper>
            <ListItem>Science Major -> Developer</ListItem>
            <ListItem>Kizomba -> An angolan partner dance</ListItem>
            <ListItem>Yoga -> to stay fit and meditate</ListItem>
            <ListItem>Cooking -> because food is delicious</ListItem>
          </ListWrapper>
        </ContentWrapper>
      </AboutMeWrapper>
  );
}