import React from 'react';
import { purp1, purp2,  yellow1 } from '../colors';
import styled from 'styled-components'

const NavigatonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const NavButton = styled.button`
  border: 2px solid black;
  background-color: ${yellow1};
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
  border-radius: 12px;
`;

export default function Navigation() {
  return (
      <NavigatonWrapper>
        <NavButton > Background </NavButton>
        <NavButton > Skills </NavButton>
        <NavButton > Projects </NavButton>
      </NavigatonWrapper>
  );
}