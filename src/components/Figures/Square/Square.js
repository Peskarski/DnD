import { SquareFigure } from './styles';
import DnD from '../../HOC/DnD/DnD';

const Square = ({ onMouseDown , clickedItem, id }) => {
  return (
    <DnD>
      <SquareFigure onMouseDown={onMouseDown} clickedItem={clickedItem} id={id}/>
    </DnD>
  )
}

export default Square;
