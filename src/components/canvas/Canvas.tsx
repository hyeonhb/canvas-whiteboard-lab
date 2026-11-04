import { useEffect, useId } from 'react';
import styles from './Canvas.module.css';
// import clsx from 'clsx';
import type { RectangleProps } from '../../types/shape';

function Canvas({
  shapes,
  ...rest
}: {
  shapes: RectangleProps[],
}) {
  const canvasId = useId();

  useEffect(() => {
    const canvas = document.getElementById(canvasId);
    if (!(canvas instanceof HTMLCanvasElement)) {
      return;
    }

    draw({
      context: canvas.getContext('2d') as CanvasRenderingContext2D,
      shapes,
    });
    
  }, [shapes, canvasId])

  return (
    <canvas id={canvasId} className={styles.container} {...rest}>
      캔버스 연습장입니다.
    </canvas>
  )
}

function draw({
  context,
  shapes
} : {
  context: CanvasRenderingContext2D,
  shapes: RectangleProps[],
}) {
  shapes.forEach(shape => {
    const {fill, x, y, width, height} = shape;

    context.fillStyle = fill;
    context.fillRect(x, y, width, height);
  });
}

export default Canvas;