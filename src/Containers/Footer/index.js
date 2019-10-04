import React from 'react';
import styled from 'styled-components'
import github_logo from '../../Assets/Images/github_logo.png'

const FooterWrapper  = styled.div`
    
`

const Title = styled.p`
  margin: 0px;
  font-size: 40px;
`

const SubTitle = styled.p`
  font-size: 30px;
`

const GithubLogo = styled.img`
  max-width: 100px;
`;

const TechnologyList = styled.p``;

export default function Intro() {
  return (
      <FooterWrapper>
        <p type="email">bsmarway@gmail.com</p>
        <GithubLogo src={github_logo}></GithubLogo>
      </FooterWrapper>
  );
}