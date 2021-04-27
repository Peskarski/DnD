import { CircleFigure } from './styles';
import DnD from '../../HOC/DnD/DnD';

const Circle = ({ onMouseDown, clickedItem, id }) => {

  return (
    <DnD>
      <CircleFigure onMouseDown={onMouseDown} clickedItem={clickedItem} id={id} />
    </DnD>
  )
}

export default Circle;


