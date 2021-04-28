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

  const deleteFigure = (id, type) => {
    const filteredArray = figureTypes[type].take.filter(element => element.id !== id);
    figureTypes[type].set(filteredArray);
    setClickedItem(null);
  }

  const addFigure = (e, type, figure) => {
    if (e.target.parentElement.dataset.positionabs === 'false') {
      figureTypes[type].set(prev => [...prev, {
        figure,
        id: `${Math.random()}${type}`,
      }]);
    } else {
      setClickedItem(e.target.id);
    }
  }

  const isFigureOutside = (e) => {
    const { canvasRight, canvasTop, canvasLeft, canvasBottom } = canvasPosition;
    const { x, y, width, height } = e.target.getBoundingClientRect();
    return (e.target.parentElement.dataset.positionabs === 'true' &&
      (x < canvasLeft || y < canvasTop ||
        (x + width) > canvasRight || (y + height) > canvasBottom))
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

  const onCircleMouseDown = (e) => {
    addFigure(e, 'circle', Circle);
  }

  const onCirlceMouseUp = (e) => {
    if (isFigureOutside(e)) {
      deleteFigure(e.target.id, 'circle');
    }
  }

  const onSquareMouseDown = (e) => {
    addFigure(e, 'square', Square);
  }

  const onSquareMouseUp = (e) => {
    if (isFigureOutside(e)) {
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
