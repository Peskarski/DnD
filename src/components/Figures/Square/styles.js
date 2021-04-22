import styled from 'styled-components';

export const SquareFigure = styled.div`
  width : 100px;
  height: 100px;
  background-color: blue;
  margin: 8px auto;
  position: ${props => props.absolute && 'absolute'};
  left: ${props => `${props.left}px`};
  top: ${props => `${props.top}px`};
`
