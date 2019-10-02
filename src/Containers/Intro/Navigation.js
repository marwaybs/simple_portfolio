import React from 'react';
import { purp1, purp2,  yellow1 } from '../colors';
import styled from 'styled-components'
import { NavButton } from '../../Components/buttons'

const NavigatonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`


export default function Navigation() {
  return (
      <NavigatonWrapper>
        <NavButton > Background </NavButton>
        <NavButton > Skills </NavButton>
        <NavButton > Projects </NavButton>
      </NavigatonWrapper>
  );
}