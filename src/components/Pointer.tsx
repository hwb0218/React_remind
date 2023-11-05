import React, { useState } from 'react';

import classes from '../styles/Pointer.module.css';

export default function Pointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      pageX, pageY, currentTarget,
    } = e;

    const isOutsideBounds = pageX >= currentTarget.offsetWidth
    || pageY >= currentTarget.offsetHeight;

    if (isOutsideBounds) return;

    setPosition((prev) => ({ ...prev, x: e.pageX, y: e.pageY }));
  };

  return (
    <div
      className={classes.container}
      onMouseMove={handleMouseMove}
    >
      <div
        className={classes.pointer}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
