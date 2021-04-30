import { CircleFigure } from './styles';
import DnD from '../../HOC/DnD/DnD';

const Circle = ({ onMouseDown, onMouseUp, clickedItem, id, left, top, absolute }) => {

  return (
    <DnD leftLS={left} topLS={top} absoluteLS={absolute}>
      <CircleFigure onMouseDown={onMouseDown} onMouseUp={onMouseUp}
        clickedItem={clickedItem} id={id} />
    </DnD>
  )
}

export default Circle;


