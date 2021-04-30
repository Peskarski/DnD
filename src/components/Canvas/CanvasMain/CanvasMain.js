import { useEffect, useRef } from 'react';
import { Main } from './styles';

const CanvasMain = ({ setPositionOnCanvas }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const { x, y, width, height } = canvasRef.current.getBoundingClientRect();
    setPositionOnCanvas({
      canvasLeft: x,
      canvasTop: y,
      canvasRight: x + width,
      canvasBottom: y + height,
    });
  }, [setPositionOnCanvas]);


  return (
    <Main ref={canvasRef}>
      <h2>Canvas</h2>
    </Main>
  )
}

export default CanvasMain;
