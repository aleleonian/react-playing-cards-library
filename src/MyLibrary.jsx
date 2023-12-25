import React from 'react';
// import './assets/css/styles.css';

//TODO: this fixed the fact that now the custom classes are being applied to the app
// but something in the build process breaks the names of the classes by adding spaces
// between characters
import styles from './assets/css/styles.css';

export const MyLibrary = () => {
  return (
    <div>
      This is my React library yea!!
    </div>
  )
};

const cardSuitStyles = {
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%) rotate(0)',
  // Add other styles as needed
};

const cardCardAStyles = { color: '#333' };

export const Ace = ({ suit }) => {
  console.log(`./assets/fa/${suit}.svg`);

  const suitImagePaths = {
    club: require('./assets/fa/club.svg').default,
    heart: require('./assets/fa/heart.svg').default,
    spade: require('./assets/fa/spade.svg').default,
    diamond: require('./assets/fa/diamond.svg').default,
    // Add more suits as needed
  };
  const imagePath = suitImagePaths[suit];
  return (
    <div className={`${styles.card} ${styles['card-a']}`} style={cardCardAStyles}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={cardSuitStyles}>
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