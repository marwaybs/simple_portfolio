import React from 'react';
import { } from '../colors';
import styled from 'styled-components'
import { NavButton } from '../../Components/buttons'

const NavigatonWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`


export default function Navigation() {
  return (
      <NavigatonWrapper>
        <NavButton > About Me </NavButton>
        <NavButton > Background </NavButton>
        <NavButton > Skills </NavButton>
        <NavButton > Projects </NavButton>
      </NavigatonWrapper>
  );
}