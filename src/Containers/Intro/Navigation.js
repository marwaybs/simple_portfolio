import React from 'react';
import { } from '../colors';
import styled from 'styled-components'
import { NavButton } from '../../Components/buttons'

const NavigatonWrapper = styled.div`
  display: block;
  flex-wrap: wrap;
  z-index: 1;
`

const NavLink = styled.a`

`;


export default function Navigation() {
  return (
      <NavigatonWrapper>
        <NavLink href="#AboutMe" ><NavButton > About Me </NavButton></NavLink>
        <NavLink href="#Background"><NavButton > Background </NavButton></NavLink>
        <NavLink href="#Skills"><NavButton > Skills </NavButton></NavLink>
        <NavLink href="#Projects"><NavButton > Projects </NavButton></NavLink>
      </NavigatonWrapper>
  );
}