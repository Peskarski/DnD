import { CircleFigure } from './styles';
import DnD from '../../HOC/DnD/DnD';

const Circle = ({ onMouseDown }) => {

  return (
    <div onMouseDown={onMouseDown}>
      {DnD(CircleFigure)}
    </div>
  )
}

export default Circle;


