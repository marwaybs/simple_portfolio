import React from 'react';
import { } from '../colors';
import styled from 'styled-components'
import { NavButton } from '../../Components/buttons'

const NavigatonWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  z-index: 1;
`

const NavLink = styled.a`

`;


export default function Navigation() {
  return (
      <NavigatonWrapper>
        <NavLink href="#AboutMe" ><NavButton > About Me </NavButton></NavLink>
        <NavLink><NavButton > Background </NavButton></NavLink>
        <NavLink><NavButton > Skills </NavButton></NavLink>
        <NavLink><NavButton > Projects </NavButton></NavLink>
      </NavigatonWrapper>
  );
}