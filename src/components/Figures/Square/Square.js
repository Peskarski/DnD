import { SquareFigure } from './styles';
import DnD from '../../HOC/DnD/DnD';

const Square = ({ onMouseDown, onMouseUp, clickedItem, id, left, top, absolute }) => {
  return (
    <DnD leftLS={left} topLS={top} absoluteLS={absolute} >
      <SquareFigure onMouseDown={onMouseDown} onMouseUp={onMouseUp}
        clickedItem={clickedItem} id={id} />
    </DnD>
  )
}

export default Square;
