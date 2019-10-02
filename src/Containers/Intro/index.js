import React from 'react';
import { purp1, purp2,  yellow1, ocean, aquamarine, light } from '../colors';
import styled, { keyframes } from "styled-components"
import Navigation from './Navigation';

const HeaderWrapper = styled.div`

`
const ContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  top:50vh;
  color: ${light}
  font-family: 'Exo', sans-serif;
`;

const Name = styled.p`
  margin: 0px;
  font-size: 40px;
`

const SubTitle = styled.p`
  font-size: 30px;
`
const Animate = keyframes`
  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
  }

  100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
  }
`;

const Animation = styled.div`
  background: ${aquamarine};  
  background: -webkit-linear-gradient(to left, ${ocean}, ${aquamarine});  
  width: 100%;
  height:100vh;
  `;

const Shape = styled.li`
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 200, 0.2);
  animation: ${Animate} 2s linear infinite;
  bottom: -150px;
`;

const ShapeList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${Shape}:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }
  ${Shape}:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s; 
  }
  ${Shape}:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }
  ${Shape}:nth-child(4){
    left: 25%;
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }
  ${Shape}:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }
  ${Shape}:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }
  ${Shape}:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 5s;
  }
  ${Shape}:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }
  ${Shape}:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }
  ${Shape}:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
`;

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

        <Animation >
            <ShapeList>
                    <Shape></Shape>
                    <Shape></Shape>
                    <Shape></Shape>
                    <Shape></Shape>
                    <Shape></Shape>
                    <Shape></Shape>
                    <Shape></Shape>
                    <Shape></Shape>
                    <Shape></Shape>
                    <Shape></Shape>
            </ShapeList>
        </Animation >
      </HeaderWrapper>
  );
}