import React from 'react';
// import './assets/css/styles.css';

//TODO: this fixed the fact that now the custom classes are being applied to the app
// but something in the build process breaks the names of the classes by adding spaces
// between characters
import styles from './assets/css/styles.css';

const suitImagePaths = {
  club: require('./assets/fa/club.svg').default,
  heart: require('./assets/fa/heart.svg').default,
  spade: require('./assets/fa/spade.svg').default,
  diamond: require('./assets/fa/diamond.svg').default,
  // Add more suits as needed
};

export const MyLibrary = () => {
  return (
    <div>
      This is my React library yea!!
    </div>
  )
};

const aceSuitStyles = {
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%) rotate(0)',
};
const TwoUpperSuitStyles = {
  left: '50%',
  top: '0%',
  transform: 'translate(-50%, -50%) rotate(0)',
};
const TwoLowerSuitStyles = {
  left: '50%',
  top: '100%',
  transform: 'translate(-50%, -50%) rotate(180deg)',
};

const cardCardAStyles = { color: '#333' };

export const Ace = ({ suit }) => {

  const imagePath = suitImagePaths[suit];

  return (
    <div className={`${styles.card} ${styles['card-a']}`} style={cardCardAStyles}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={aceSuitStyles}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>A</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>A</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
    </div>
  )
}
export const Two = ({ suit }) => {
  
  const imagePath = suitImagePaths[suit];

  return (
    <div className={`${styles.card} ${styles['card-2']}`} style={cardCardAStyles}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={TwoUpperSuitStyles}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={TwoLowerSuitStyles}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>2</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>2</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
    </div>
  )
}
export const Three = ({ suit }) => {
  
  const imagePath = suitImagePaths[suit];

  return (
    <div className={`${styles.card} ${styles['card-3']}`} style={cardCardAStyles}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={aceSuitStyles}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={aceSuitStyles}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={aceSuitStyles}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>3</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>3</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
    </div>
  )
}
export const Four = ({ suit }) => {
  
  const imagePath = suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={cardCardAStyles}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={aceSuitStyles}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={aceSuitStyles}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={aceSuitStyles}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={aceSuitStyles}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>4</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>4</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
    </div>
  )
}