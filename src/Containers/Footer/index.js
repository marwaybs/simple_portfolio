import React from 'react';
import styled from 'styled-components'
import { dark, light } from '../../Components/colors';
// import github_logo from '../../Assets/Images/github_logo.png'

const FooterWrapper  = styled.div`
    background-color: ${dark}
`

const Text = styled.p`
  color: ${light}
`;

const Link = styled.a`
  color: ${light};
`

// const GithubLogo = styled.img`
//   max-width: 100px;
// `;

export default function Intro() {
  return (
      <FooterWrapper>
        <Text>Email:</Text>
        <Link href="mailto:bsmarway@gmail.com" target="_top">bsmarway@gmail.com</Link>
      </FooterWrapper>
  );
}