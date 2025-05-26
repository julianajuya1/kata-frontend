import React, { useRef, useEffect, useState } from 'react';
import styles from './TopWinner.module.css';
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
    <div className={styles.card} ref={cardRef}>
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        run={true}
      />
      <h2 className={styles.title}>🏆 Cliente con Mayor Dispersión</h2>
      <p className={styles.nombre}>{nombre}</p>
      <p className={styles.total}>${total.toLocaleString()}</p>
      <p className={styles.subtext}>¡Felicidades! 🎉</p>
    </div>
  );
};

export default TopWinner;
