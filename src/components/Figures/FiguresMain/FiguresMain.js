import Circle from '../Cirlce/Circle';
import Square from '../Square/Square';
import { Main } from './styles';
import React, { useState, useEffect, useCallback } from 'react';

const FiguresMain = ({ canvasPosition }) => {
  const [circlesArr, addCircle] = useState([]);
  const [squaresArr, addSquare] = useState([]);
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

  const setDataToLS = useCallback(() => {
    localStorage.setItem('data', JSON.stringify({
      circlesArr,
      squaresArr,
      clickedItem,
    }));
  }, [circlesArr, squaresArr, clickedItem]);

  const getDataFromLS = () => {
    if (JSON.parse(localStorage.getItem('data'))) {
      const { circlesArr, squaresArr, clickedItem } = JSON.parse(localStorage.getItem('data'));
      const circlesArrWithFigures = circlesArr.map(element => {
        const { id, left, top, absolute } = element;
        return {
          figure: Circle,
          id,
          left,
          top,
          absolute
        }
      });

      const squaresArrWithFigures = squaresArr.map(element => {
        const { id, left, top, absolute } = element;
        return {
          figure: Square,
          id,
          left,
          top,
          absolute
        }
      });

      addCircle(circlesArrWithFigures);
      addSquare(squaresArrWithFigures);
      setClickedItem(clickedItem);
    } else {
      addCircle([{
        figure: Circle,
        id: '0circle',
        left: 0,
        top: 0,
        absolute: false
      }]);
      addSquare([{
        figure: Square,
        id: '0square',
        left: 0,
        top: 0,
        absolute: false
      }]);
      setClickedItem(null);
    }
  }

  const deleteFigure = useCallback((id, type) => {
    const filteredArray = figureTypes[type].take.filter(element => element.id !== id);
    figureTypes[type].set(filteredArray);
    setClickedItem(null);
  }, [figureTypes]);

  const addFigure = (e, type, figure) => {
    if (e.target.parentElement.dataset.positionabs === 'false') {
      const { x, y } = e.target.getBoundingClientRect();

      figureTypes[type].set(prev => [...prev, {
        figure,
        id: `${Math.random()}${type}`,
        top: y,
        left: x,
        absolute: false,
      }]);
    }
    setClickedItem(e.target.id);
  }

  const isFigureOutside = (e) => {
    const { canvasRight, canvasTop, canvasLeft, canvasBottom } = canvasPosition;
    const { x, y, width, height } = e.target.getBoundingClientRect();
    return (e.target.parentElement.dataset.positionabs === 'true' &&
      (x < canvasLeft || y < canvasTop ||
        (x + width) > canvasRight || (y + height) > canvasBottom))
  }

  const setCoordinates = (e, type) => {
    figureTypes[type].set(figureTypes[type].take.map(element => {
      if (element.id === e.target.id) {
        const { x, y } = e.target.getBoundingClientRect();
        return {
          figure: element.figure,
          id: element.id,
          top: y,
          left: x,
          absolute: true
        }
      } else {
        return element;
      }
    }));
  }

  const handleDeleteKey = useCallback((e) => {
    if (e.code === 'Delete' && clickedItem) {
      deleteFigure(clickedItem, 'circle');
      deleteFigure(clickedItem, 'square');
    }
  }, [deleteFigure, clickedItem]);

  useEffect(() => {
    getDataFromLS();
  }, []);

  useEffect(() => {
    setDataToLS();
  }, [circlesArr, squaresArr, clickedItem, setDataToLS])


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
    } else {
      setCoordinates(e, 'circle');
    }
  }

  const onSquareMouseDown = (e) => {
    addFigure(e, 'square', Square);
  }

  const onSquareMouseUp = (e) => {
    if (isFigureOutside(e)) {
      deleteFigure(e.target.id, 'square');
    } else {
      setCoordinates(e, 'square');
    }
  }

  return (
    <Main>
      <h2>Figures</h2>
      {circlesArr.map(element => (
        <element.figure key={element.id} onMouseDown={onCircleMouseDown} clickedItem={clickedItem}
          onMouseUp={onCirlceMouseUp} id={element.id} left={element.left} top={element.top} absolute={element.absolute} />)
      )}
      {squaresArr.map(element => (
        <element.figure key={element.id} onMouseDown={onSquareMouseDown} clickedItem={clickedItem}
          onMouseUp={onSquareMouseUp} id={element.id} left={element.left} top={element.top} absolute={element.absolute} />)
      )}
    </Main>
  )
}

export default FiguresMain;
