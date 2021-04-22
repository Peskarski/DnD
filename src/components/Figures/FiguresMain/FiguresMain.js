import Circle from '../Cirlce/Circle';
import Square from '../Square/Square';
import { Main } from './styles';
import { useState } from 'react';

const FiguresMain = () => {
  const [circlesArr, addCircle] = useState([Circle]);
  const [squaresArr, addSquare] = useState([Square]);

  const onCircleMouseDown = (e) => {
    if (e.target.dataset.positionabs === 'false') {
      addCircle(prev => [...prev, Circle]);
    }
  }

  const onSquareMouseDown = () => {
    addSquare(prev => [...prev, Square]);
  }

  return (
    <Main>
      <h2>Figures</h2>
      {circlesArr.map((Element, index) => (
        <Element key={index} onMouseDown={onCircleMouseDown} />
      )
      )}
      {squaresArr.map((Element, index) => (
        <Element key={index} onMouseDown={onSquareMouseDown} />
      )
      )}
    </Main>
  )
}

export default FiguresMain;
