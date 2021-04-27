import styled from 'styled-components';

export const DnDStyled = styled.div`
  position: ${props => props.absolute && 'absolute'};
  left: ${props => `${props.left}px`};
  top: ${props => `${props.top}px`};
`
