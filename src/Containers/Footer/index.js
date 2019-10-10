import React from 'react';
import styled from 'styled-components'
import { dark, light } from '../../Components/colors';
// import github_logo from '../../Assets/Images/github_logo.png'

const FooterWrapper  = styled.div`
    background-color: ${dark}
    margin-top: 20px;
    display: flex;
`
const Section = styled.div`
  padding: 10px;
  margin: auto;
  text-align: center;
  min-width: 100px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = styled.span`
  color: ${light}
`;

const Title = styled.p`
  color: ${light};
`;


const Link = styled.a`
  color: ${light};
  text-decoration: none;
`

export default function Intro() {
  return (
      <FooterWrapper>
        <Section>
          <Title>Contact me:</Title>
        </Section>
        <Section>
          <Link href="mailto:bsmarway@gmail.com" target="_top">bsmarway@gmail.com</Link>
        </Section>
        <Section>
          <Link href="https://github.com/marwaybs" target="_blank">Github</Link>
        </Section>
        <Section>
          <Link href="https://ca.linkedin.com/in/bhaag-marway-5630b0a8" target="_blank">Linkedin</Link>
        </Section>
      </FooterWrapper>
  );
}