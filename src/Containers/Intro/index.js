import React from 'react';
import { dark } from '../../Components/colors';
import styled from "styled-components"
import Navigation from './Navigation';
import BackgroundAnimation from './BackgroundAnimation';

const HeaderWrapper = styled.div`

`
const ContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  top:35vh;
  color: ${dark};
  text-align: center;
  z-index: 1;
`;

const Name = styled.p`
  margin: 0px;
  font-size: 40px;
`

const SubTitle = styled.p`
  font-size: 30px;
`

export default function Intro() {
  return (
      <HeaderWrapper>
        <ContentWrapper>
          <Name>
            Bhaag Marway
          </Name>
          <SubTitle>
            Full Stack Developer
          </SubTitle>
          <Navigation/>
        </ContentWrapper>
        <BackgroundAnimation/>
      </HeaderWrapper>
  );
}