import { useState } from 'react';

const DnD = (Figure) => {
  const [toMove, setToMove] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [shiftLeft, setShiftLeft] = useState(0);
  const [shiftTop, setShiftTop] = useState(0);
  const [positionAbs, setPositionAbs] = useState(false);

  const handleMouseDown = (e) => {
    const { x, y } = e.target.getBoundingClientRect();
    setPositionAbs(true);
    setShiftLeft(e.clientX - x);
    setShiftTop(e.clientY - y);
    setLeft(e.clientX);
    setTop(e.clientY);
    setToMove(true);
    console.log('dnd');
  }

  const handleMouseUp = () => {
    setToMove(false);
  }

  const handleMouseMove = (e) => {
    if (toMove) {
      setLeft(e.pageX);
      setTop(e.pageY);
    }
  }

  return (
    <Figure onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove} left={left - shiftLeft}
      top={top - shiftTop} absolute={positionAbs} data-positionabs={positionAbs}/>
  )
}

export default DnD;
