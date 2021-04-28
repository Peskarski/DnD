import { CircleFigure } from './styles';
import DnD from '../../HOC/DnD/DnD';

const Circle = ({ onMouseDown, onMouseUp, clickedItem, id }) => {

  return (
    <DnD>
      <CircleFigure onMouseDown={onMouseDown} onMouseUp={onMouseUp}
        clickedItem={clickedItem} id={id} />
    </DnD>
  )
}

export default Circle;


