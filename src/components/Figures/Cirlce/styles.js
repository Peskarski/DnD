import styled from 'styled-components';

export const CircleFigure = styled.div`
  width : 100px;
  height: 100px;
  background-color: green;
  border-radius: 50%;
  margin: 0 auto 8px auto;
  position: ${props => props.absolute && 'absolute'};
  left: ${props => `${props.left}px`};
  top: ${props => `${props.top}px`};
`
