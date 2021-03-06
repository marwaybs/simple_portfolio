import styled from 'styled-components'
import {dark, light} from './colors';
export const NavButton = styled.button`
  border: 2px solid ${light};
  background-color: ${dark};
  color: ${light};
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
  border-radius: 12px;
  transition: 0.5s;
  :hover {
    border-radius: 25px;
  }
`;