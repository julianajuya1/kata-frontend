import React, { useRef, useEffect, useState } from 'react';
import './TopWinner.scss';
import Confetti from 'react-confetti';

const TopWinner = ({ nombre, total }) => {
  const cardRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (cardRef.current) {
      const { offsetWidth, offsetHeight } = cardRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        run={true}
      />
      <h2 className="card__title">🏆 Cliente con Mayor Dispersión</h2>
      <p className="card__name">{nombre}</p>
      <p className="card__total">${total.toLocaleString()}</p>
      <p className="card__subtext">¡Felicidades! 🎉</p>
    </div>
  );
};

export default TopWinner;
