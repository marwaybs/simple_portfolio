import React from 'react';
import { dark } from '../../Components/colors';
import styled, { keyframes } from "styled-components"
const Animate = keyframes`

  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
  }

  100%{
      transform: translateY(-100vh) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
  }
`;

const Animation = styled.div`
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
  background-color: ${dark};
`;

const ShapeList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99vh;
  overflow: hidden;
  padding: 0;

  ${Shape}:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    animation-duration: 25s; 
  }
  ${Shape}:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 10s; 
  }
  ${Shape}:nth-child(3){
    left: 70%;
    width: 25px;
    height: 25px;
    animation-delay: 4s;
    animation-duration: 13s;
  }
  ${Shape}:nth-child(4){
    left: 25%;
    left: 40%;
    width: 70px;
    height: 70px;
    animation-delay: 0s;
    animation-duration: 18s;
  }
  ${Shape}:nth-child(5){
    left: 65%;
    width: 15px;
    height: 15px;
    animation-delay: 0s;
    animation-duration: 16s; 
  }
  ${Shape}:nth-child(6){
    left: 75%;
    width: 90px;
    height: 90px;
    animation-delay: 3s;
    animation-duration: 25s; 
  }
  ${Shape}:nth-child(7){
    left: 35%;
    width: 140px;
    height: 140px;
    animation-delay: 5s;
    animation-duration: 12s;
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
    width: 30px;
    height: 30px;
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
    ${Shape}:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    animation-duration: 25s; 
  }
  ${Shape}:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 10s; 
  }
  ${Shape}:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    animation-duration: 13s;
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
    animation-duration: 16s; 
  }
  ${Shape}:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
    animation-duration: 25s; 
  }
  ${Shape}:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 5s;
    animation-duration: 12s;
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
  ${Shape}:nth-child(11){
    left: 20%;
    width: 80px;
    height: 80px;
    animation-delay: 5s;
    animation-duration: 30s; 
  }
  ${Shape}:nth-child(12){
    left: 15%;
    width: 20px;
    height: 20px;
    animation-delay: 7s;
    animation-duration: 15s; 
  }
  ${Shape}:nth-child(13){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 9s;
    animation-duration: 14s;
  }
  ${Shape}:nth-child(14){
    left: 30%;
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 5s;
    animation-duration: 20s;
  }
  ${Shape}:nth-child(15){
    left: 60%;
    width: 20px;
    height: 20px;
    animation-delay: 5s;
    animation-duration: 15s; 
  }
  ${Shape}:nth-child(16){
    left: 70%;
    width: 110px;
    height: 110px;
    animation-delay: 8s;
    animation-duration: 22s; 
  }
  ${Shape}:nth-child(17){
    left: 30%;
    width: 150px;
    height: 150px;
    animation-delay: 10s;
    animation-duration: 14s;
  }
  ${Shape}:nth-child(18){
    left: 55%;
    width: 25px;
    height: 25px;
    animation-delay: 20s;
    animation-duration: 30s;
  }
  ${Shape}:nth-child(19){
    left: 25%;
    width: 15px;
    height: 15px;
    animation-delay: 7s;
    animation-duration: 15s;
  }
  ${Shape}:nth-child(20){
    left: 90%;
    width: 150px;
    height: 150px;
    animation-delay: 5s;
    animation-duration: 14s;
  }
`;

export default function BackgroundAnimation() {
    return (
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
    );
  }