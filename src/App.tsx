import Canvas from './components/canvas/Canvas';
import styles from './App.module.css'
import clsx from 'clsx';

function App() {
  return (
    <div className={clsx(styles.container, 'flex-center')}>
      <Canvas></Canvas>
    </div>
  )
}

export default App
