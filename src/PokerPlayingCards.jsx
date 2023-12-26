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

export const PokerPlayingCards = () => {
  return (
    <div>
      This is my React library yea!!
    </div>
  )
};

const FF3MFMFR0 = {
  left: '50%',
  top: '43%',
  transform: 'translate(-50%, -50%) rotate(0)',
};
const FSTMFMFR0 = {
  left: '50%',
  top: '10%',
  transform: 'translate(-50%, -50%) rotate(0)',
};

const FMTMFMFR0 = {
  left: '50%',
  top: '-10%',
  transform: 'translate(-50%, -50%) rotate(0)',
};
const ZMTMFMFR0 = {
  left: '0%',
  top: '-10%',
  transform: 'translate(-50%, -50%) rotate(0)',
};
const ZF3MFMFR0 = {
  left: '0%',
  top: '43%',
  transform: 'translate(-50%, -50%) rotate(0)',
};
const F23MFMFR0 = {
  left: '50%',
  top: '23%',
  transform: 'translate(-50%, -50%) rotate(0)',
};
const ZTTMFMFR0 = {
  left: '0%',
  top: '23%',
  transform: 'translate(-50%, -50%) rotate(0)',
};
const HTTMFMFR0 = {
  left: '100%',
  top: '23%',
  transform: 'translate(-50%, -50%) rotate(0)',
};

const HMTMFMFR0 = {
  left: '100%',
  top: '-10%',
  transform: 'translate(-50%, -50%) rotate(0)',
};
const HF3MFMFR0 = {
  left: '100%',
  top: '43%',
  transform: 'translate(-50%, -50%) rotate(0)',
};

const FHTMFMFR180 = {
  left: '50%',
  top: '110%',
  transform: 'translate(-50%, -50%) rotate(180deg)',
};
const ZHTMFMFR180 = {
  left: '0%',
  top: '110%',
  transform: 'translate(-50%, -50%) rotate(180deg)',
};
const HHTMFMFR180 = {
  left: '100%',
  top: '110%',
  transform: 'translate(-50%, -50%) rotate(180deg)',
};
const FEMFMFR180 = {
  left: '50%',
  top: '90%',
  transform: 'translate(-50%, -50%) rotate(180deg)',
};
const ZSFMFR180 = {
  left: '0%',
  top: '75%',
  transform: 'translate(-50%, -50%) rotate(180deg)',
};
const HSFMFR180 = {
  left: '100%',
  top: '75%',
  transform: 'translate(-50%, -50%) rotate(180deg)',
};

const color333 = { color: '#333' };

export const Ace = ({ suit }) => {

  const imagePath = suitImagePaths[suit];

  return (
    <div className={`${styles.card} ${styles['card-a']}`} style={color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={FF3MFMFR0}>
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
    <div className={`${styles.card} ${styles['card-2']}`} style={color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={FMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={FHTMFMFR180}>
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
    <div className={`${styles.card}`} style={color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={FMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={FF3MFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={FHTMFMFR180}>
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
    <div className={`${styles.card}`} style={color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={ZMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZHTMFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HHTMFMFR180}>
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
export const Five = ({ suit }) => {
  
  const imagePath = suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={ZMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={FF3MFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZHTMFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HHTMFMFR180}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>5</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>5</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
    </div>
  )
}
export const Six = ({ suit }) => {
  
  const imagePath = suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={ZMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZF3MFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HF3MFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZHTMFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HHTMFMFR180}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>6</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>6</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
    </div>
  )
}
export const Seven = ({ suit }) => {
  
  const imagePath = suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={ZMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={F23MFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZF3MFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HF3MFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZHTMFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HHTMFMFR180}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>7</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>7</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
    </div>
  )
}
export const Eight = ({ suit }) => {
  
  const imagePath = suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={ZMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={F23MFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZF3MFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HF3MFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={FEMFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZHTMFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HHTMFMFR180}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>8</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>8</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
    </div>
  )
}
export const Nine = ({ suit }) => {
  
  const imagePath = suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={ZMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZTTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HTTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={FF3MFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZSFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HSFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZHTMFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HHTMFMFR180}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>9</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>9</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
    </div>
  )
}
export const Ten = ({ suit }) => {
  
  const imagePath = suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={ZMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HMTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={FSTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZTTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HTTMFMFR0}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZSFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HSFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={FEMFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={ZHTMFMFR180}>
          <img src={imagePath} />
        </div>
        <div className={styles['card-suit']} style={HHTMFMFR180}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>10</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>10</div>
        <div className={styles['card-suit']}>
          <img src={imagePath} />
        </div>
      </div>
    </div>
  )
}
