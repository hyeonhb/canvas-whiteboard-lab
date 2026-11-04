import { useState, useId } from 'react';
import Canvas from './components/canvas/Canvas';
import styles from './App.module.css'
import clsx from 'clsx';
import type {RectangleProps} from './types/shape';

function App() {
  const [shapes, setShapes] = useState<RectangleProps[]>([
    {
      id: useId(),
      x: 100,
      y: 30,
      width: 50,
      height: 50,
      fill: 'red',
    },
    {
      id: useId(),
      x: 130,
      y: 50,
      width: 50,
      height: 50,
      fill: 'blue',
    }
  ]);

  return (
    <div className={clsx(styles.container, 'flex-center')}>
      <Canvas shapes={shapes}></Canvas>
    </div>
  )
}

export default App
