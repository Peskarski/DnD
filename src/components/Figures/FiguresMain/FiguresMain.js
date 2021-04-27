import Circle from '../Cirlce/Circle';
import Square from '../Square/Square';
import { Main } from './styles';
import { useState } from 'react';

const FiguresMain = () => {
  const [circlesArr, addCircle] = useState([Circle]);
  const [squaresArr, addSquare] = useState([Square]);
  const [clickedItem, setClickedItem] = useState(null);

  const onCircleMouseDown = (e) => {
    if (e.target.parentElement.dataset.positionabs === 'false') {
      addCircle(prev => [...prev, Circle]);
    } else {
      setClickedItem(e.target.id);
    }
  }

  const onSquareMouseDown = (e) => {
    if (e.target.parentElement.dataset.positionabs === 'false') {
      addSquare(prev => [...prev, Square]);
    } else {
      setClickedItem(e.target.id);
    }
  }

  return (
    <Main>
      <h2>Figures</h2>
      {circlesArr.map((Element, index) => (
        <Element key={index} onMouseDown={onCircleMouseDown} clickedItem={clickedItem}
          id={index + 'circle'} />)
      )}
      {squaresArr.map((Element, index) => (
        <Element key={index} onMouseDown={onSquareMouseDown} clickedItem={clickedItem}
          id={index + 'square'} />)
      )}
    </Main>
  )
}

export default FiguresMain;
