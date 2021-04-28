import styled from 'styled-components';

// export const DnDStyled = styled.div`
//   position: ${props => props.absolute && 'absolute'};
//   left: ${props => `${props.left}px`};
//   top: ${props => `${props.top}px`};
// `

export const DnDStyled = styled.div.attrs(props =>({
  style: {
    position: props.absolute && 'absolute',
    top: props.top + 'px',
    left: props.left + 'px',
  }
}))``
