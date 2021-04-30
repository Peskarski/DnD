import styled from 'styled-components';

export const DnDStyled = styled.div.attrs(props =>({
  style: {
    position: (props.absoluteLS || props.absolute) && 'absolute',
    top: props.top + 'px',
    left: props.left + 'px',
  }
}))``
