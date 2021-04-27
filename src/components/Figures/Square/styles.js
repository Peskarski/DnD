import styled from 'styled-components';

export const SquareFigure = styled.div`
  width : 100px;
  height: 100px;
  background-color: blue;
  margin: 0 auto 8px auto;
  position: relative;
  border: ${props => props.clickedItem === props.id ? '2px solid black' : ''};
  z-index: ${props => props.clickedItem === props.id ? '99999999' : '0'};
`
