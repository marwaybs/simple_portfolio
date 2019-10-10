import React from 'react';
import { dark } from '../../Components/colors';
import styled from 'styled-components';
import { phoneSize } from './../../Components/breakpoints';

const AboutMeWrapper = styled.div`
  margin: 0px;
  text-align: center;
  padding: 75px;
  color: ${dark}
  @media screen and (max-width: ${phoneSize}) {
    padding: 20px
  }
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
  padding-bottom: 5px;
`;

const Text = styled.p``;

export default function AboutMe() {
  return (
      <AboutMeWrapper id="AboutMe">
        <Title>
          About Me
        </Title>
        <ContentWrapper>
          <SubTitle>
            Variety's the spice of life
          </SubTitle>
          <ListWrapper>
            <ListItem>Kizomba &#8594; An Angolan partner dance</ListItem>
            <ListItem>Yoga &#8594; To stay fit and meditate</ListItem>
            <ListItem>Cooking &#8594; Because food is delicious</ListItem>
          </ListWrapper>
        </ContentWrapper>
        <Text>I've modelled my life to take care of myself and keep learning.</Text>
      </AboutMeWrapper>
  );
}