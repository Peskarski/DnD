import { SquareFigure } from './styles';
import DnD from '../../HOC/DnD/DnD';

const Square = ({ onMouseDown, onMouseUp, clickedItem, id }) => {
  return (
    <DnD>
      <SquareFigure onMouseDown={onMouseDown} onMouseUp={onMouseUp}
        clickedItem={clickedItem} id={id} />
    </DnD>
  )
}

export default Square;
