import { SquareFigure } from './styles';
import DnD from '../../HOC/DnD/DnD';

const Square = ({ onMouseDown }) => {
  return (
    <div onMouseDown={onMouseDown}>
      {DnD(SquareFigure)}
    </div>
  )
}

export default Square;
