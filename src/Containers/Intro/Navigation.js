import React from 'react';
import { } from '../../Components/colors';
import styled from 'styled-components';
import { NavButton } from '../../Components/buttons';
import { phoneSize } from '../../Components/breakpoints';

const NavigatonWrapper = styled.div`
  display: block;
  flex-wrap: wrap;
  z-index: 1;
  padding-top: 38vh;
  @media only screen and (max-device-width: ${phoneSize}) {
    padding-top: 12vh;
  }
`

const NavLink = styled.a`

`;


export default function Navigation() {
  return (
      <NavigatonWrapper>
        <NavLink href="#AboutMe" ><NavButton > About Me </NavButton></NavLink>
        <NavLink href="#Skills"><NavButton > Skills </NavButton></NavLink>
        <NavLink href="#Projects"><NavButton > Projects </NavButton></NavLink>
      </NavigatonWrapper>
  );
}