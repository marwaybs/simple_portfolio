import styled from 'styled-components'
import {sea, aquamarine, ocean, light} from './../Containers/colors';
export const NavButton = styled.button`
  border: 2px solid ${sea};
  background-color: ${aquamarine};
  color: ${light};
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
  border-radius: 12px;
  :hover {
    color: red;
  }
`;