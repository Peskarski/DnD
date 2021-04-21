import React from 'react';
import './styles.js';
import FiguresMain from './components/Figures/FiguresMain/FiguresMain';
import CanvasMain from './components/Canvas/CanvasMain/CanvasMain';
import { Application } from './styles';

const App = () => {
  return (
    <Application>
      <FiguresMain />
      <CanvasMain />
    </Application>
  )
}

export default App;
