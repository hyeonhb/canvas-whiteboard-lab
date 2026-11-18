import { useEffect, useRef } from 'react';
import styles from './Canvas.module.css';
// import clsx from 'clsx';
import type { Rectangle } from '../../types/shape';

function Canvas({
  shapes,
  width = 400,
  height = 250,
  ...rest
}: {
  shapes: Rectangle[],
  width?: number,
  height?: number,
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!context) {
      return;
    }

    const {width, height} = canvas;
    draw({
      canvasSize: {width, height},
      context,
      shapes,
    });
    
  }, [shapes, canvasRef])

  return (
    <canvas
      ref={canvasRef}
      className={styles.container}
      width={width}
      height={height}
      {...rest}>
      캔버스 연습장입니다.
    </canvas>
  )
}

function draw({
  canvasSize,
  context,
  shapes
} : {
  canvasSize: {width: number, height: number},
  context: CanvasRenderingContext2D,
  shapes: Rectangle[],
}) {
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvasSize.width, canvasSize.height)

  shapes.forEach(shape => {
    const {fill, x, y, width, height} = shape;

    context.fillStyle = fill;
    context.fillRect(x, y, width, height);
  });
}

export default Canvas;