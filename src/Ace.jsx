import React from 'react';
import styles from './assets/css/styles.css';
import * as Constants from './Constants.jsx';

export const Ace = ({ suit }) => {

  const suitImagePath = Constants.suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={Constants.FF3MFMFR0}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>A</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>A</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}