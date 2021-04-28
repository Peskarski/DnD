import './styles.js';
import FiguresMain from './components/Figures/FiguresMain/FiguresMain';
import CanvasMain from './components/Canvas/CanvasMain/CanvasMain';
import { Application } from './styles';
import { useState, useCallback } from 'react';

const App = () => {
  const [canvasPosition, setCanvasPosition] = useState({
    canvasLeft: 0,
    canvasTop: 0,
    canvasRight: 0,
    canvasBottom: 0
  });

  const setPositionOnCanvas = useCallback((position) => {
    setCanvasPosition(position);
  }, []);

  return (
    <Application>
      <FiguresMain canvasPosition={canvasPosition} />
      <CanvasMain setPositionOnCanvas={setPositionOnCanvas} />
    </Application>
  )
}

export default App;
