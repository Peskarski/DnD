import styled from 'styled-components';

export const CircleFigure = styled.div.attrs(props =>({
  style: {
    top: props.top  + 'px',
    left: props.left + 'px',
  }
}))`
  width : 100px;
  height: 100px;
  background-color: green;
  border-radius: 50%;
  margin: 0 auto 8px auto;
  position: relative;
  border: ${props => props.clickedItem === props.id ? '2px solid black' : ''};
  z-index: ${props => props.clickedItem === props.id ? '99999999' : '0'};
`
