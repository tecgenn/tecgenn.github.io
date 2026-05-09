import type React from 'react';

const LETTERS = ['T', 'E', 'C', 'G', 'N'];
const CELL_COUNT = 2000;

const MatrixBackground: React.FC = () => {
  const cells = Array.from({ length: CELL_COUNT }, (_, i) => (
    <span key={i}>{LETTERS[Math.floor(Math.random() * LETTERS.length)]}</span>
  ));

  return <div className="jp-matrix fixed inset-0 z-0 pointer-events-none">{cells}</div>;
};

export default MatrixBackground;
