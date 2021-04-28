import Circle from '../Cirlce/Circle';
import Square from '../Square/Square';
import { Main } from './styles';
import React, { useState, useEffect, useCallback } from 'react';

const FiguresMain = ({ canvasPosition }) => {
  const [circlesArr, addCircle] = useState([{
    figure: Circle,
    id: '0circle',
  }]);

  const [squaresArr, addSquare] = useState([{
    figure: Square,
    id: '0square',
  }]);

  const [clickedItem, setClickedItem] = useState(null);

  const figureTypes = {
    circle: {
      take: circlesArr,
      set: addCircle
    },

    square: {
      take: squaresArr,
      set: addSquare
    }
  }

  console.log('rendered');

  const deleteFigure = (id, type) => {
    const filteredArray = figureTypes[type].take.filter(element => element.id !== id);
    figureTypes[type].set(filteredArray);
    setClickedItem(null);
  }

  const handleDeleteKey = (e) => {
    if (e.code === 'Delete' && clickedItem) {
      deleteFigure(clickedItem, 'circle');
      deleteFigure(clickedItem, 'square');
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleDeleteKey);
    return () => {
      document.removeEventListener('keydown', handleDeleteKey);
    };
  }, [handleDeleteKey]);

  const { canvasRight, canvasTop, canvasLeft, canvasBottom } = canvasPosition;

  const onCircleMouseDown = (e) => {
    if (e.target.parentElement.dataset.positionabs === 'false') {
      addCircle(prev => [...prev, {
        figure: Circle,
        id: `${Math.random()}circle`
      }]);
    } else {
      setClickedItem(e.target.id);
    }
  }

  const onCirlceMouseUp = (e) => {
    const { x, y, width, height } = e.target.getBoundingClientRect();
    if (e.target.parentElement.dataset.positionabs === 'true' &&
      (x < canvasLeft || y < canvasTop ||
        (x + width) > canvasRight || (y + height) > canvasBottom)) {
      deleteFigure(e.target.id, 'circle');
    }
  }

  const onSquareMouseDown = (e) => {
    if (e.target.parentElement.dataset.positionabs === 'false') {
      addSquare(prev => [...prev, {
        figure: Square,
        id: `${Math.random()}square`
      }]);
    } else {
      setClickedItem(e.target.id);
    }
  }

  const onSquareMouseUp = (e) => {
    const { x, y, width, height } = e.target.getBoundingClientRect();
    if (e.target.parentElement.dataset.positionabs === 'true' &&
      (x < canvasLeft || y < canvasTop ||
        (x + width) > canvasRight || (y + height) > canvasBottom)) {
      deleteFigure(e.target.id, 'square');
    }
  }

  return (
    <Main>
      <h2>Figures</h2>
      {circlesArr.map(element => (
        <element.figure key={element.id} onMouseDown={onCircleMouseDown} clickedItem={clickedItem}
          onMouseUp={onCirlceMouseUp} id={element.id} />)
      )}
      {squaresArr.map(element => (
        <element.figure key={element.id} onMouseDown={onSquareMouseDown} clickedItem={clickedItem}
          onMouseUp={onSquareMouseUp} id={element.id} />)
      )}
    </Main>
  )
}

export default FiguresMain;
