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

  const handleMoveClick = () => {
    if (shapes.length === 0) return;
    updateShapes(shapes[0].id, 'x', shapes[0].x - 10)
  }

  const handleClearClick = () => {
    setShapes([]);
  }

  const updateShapes = (id: string, key: string, value: string | number) => {
    setShapes(prev => {
      return prev.map(shape => {
        return shape.id === id
          ? {...shape, [key]: value}
          : shape
      });
    });
  }

  return (
    <div className={clsx(styles.container, 'flex-center', 'flex-column', 'gap-10')}>
      <div className={clsx('gap-10')}>
        <button type="button" onClick={handleMoveClick}>Move</button>
        <button type="button" onClick={handleClearClick}>Clear</button>
      </div>

      <Canvas shapes={shapes}></Canvas>
    </div>
  )
}

export default App
