import React from 'react';
//TODO: this fixed the fact that now the custom classes are being applied to the app
// but something in the build process breaks the names of the classes by adding spaces
// between characters
import { Back } from './Back.jsx';
import { Joker } from './Joker.jsx';
import { Ace } from './Ace.jsx';

import * as Constants from './Constants.jsx';
import styles from './assets/css/styles.css';

export const PokerPlayingCards = () => {
  return (
    <div>
      This is my React library yea!!
    </div>
  )
};

export const Two = ({ suit }) => {

  const suitImagePath = Constants.suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={Constants.FMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.FHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>2</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>2</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}
export const Three = ({ suit }) => {

  const suitImagePath = Constants.suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={Constants.FMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.FF3MFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.FHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>3</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>3</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}
export const Four = ({ suit }) => {

  const suitImagePath = Constants.suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={Constants.ZMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>4</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>4</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}
export const Five = ({ suit }) => {

  const suitImagePath = Constants.suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={Constants.ZMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.FF3MFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>5</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>5</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}
export const Six = ({ suit }) => {

  const suitImagePath = Constants.suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={Constants.ZMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZF3MFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HF3MFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>6</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>6</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}
export const Seven = ({ suit }) => {

  const suitImagePath = Constants.suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={Constants.ZMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.F23MFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZF3MFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HF3MFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>7</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>7</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}
export const Eight = ({ suit }) => {

  const suitImagePath = Constants.suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={Constants.ZMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.F23MFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZF3MFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HF3MFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.FEMFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>8</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>8</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}
export const Nine = ({ suit }) => {

  const suitImagePath = Constants.suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={Constants.ZMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZTTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HTTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.FF3MFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZSFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HSFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>9</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>9</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}
export const Ten = ({ suit }) => {

  const suitImagePath = Constants.suitImagePaths[suit];

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-middle']}>
        <div className={styles['card-suit']} style={Constants.ZMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HMTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.FSTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZTTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HTTMFMFR0}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZSFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HSFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.FEMFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.ZHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
        <div className={styles['card-suit']} style={Constants.HHTMFMFR180}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>10</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>10</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}
export const Jack = ({ suit }) => {

  const jackImagePaths = {
    club: require('./assets/graphics/jc.svg').default,
    heart: require('./assets/graphics/jh.svg').default,
    spade: require('./assets/graphics/js.svg').default,
    diamond: require('./assets/graphics/jd.svg').default,
  };

  const jackImagePath = jackImagePaths[suit];
  const suitImagePath = Constants.suitImagePaths[suit];
  const jackStyle = {
    backgroundImage: `url(${jackImagePath})`,
    /* Add other styles as needed */
  };

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-royal']} style={jackStyle}></div>
      <div className={styles['card-middle']}>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>J</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>J</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}
export const Queen = ({ suit }) => {

  const queenImagePaths = {
    club: require('./assets/graphics/qc.svg').default,
    heart: require('./assets/graphics/qh.svg').default,
    spade: require('./assets/graphics/qs.svg').default,
    diamond: require('./assets/graphics/qd.svg').default,
  };

  const queenImagePath = queenImagePaths[suit];
  const suitImagePath = Constants.suitImagePaths[suit];
  const queenStyle = {
    backgroundImage: `url(${queenImagePath})`,
  };

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-royal']} style={queenStyle}></div>
      <div className={styles['card-middle']}>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>Q</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>Q</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}
export const King = ({ suit }) => {

  const kingImagePaths = {
    club: require('./assets/graphics/kc.svg').default,
    heart: require('./assets/graphics/kh.svg').default,
    spade: require('./assets/graphics/ks.svg').default,
    diamond: require('./assets/graphics/kd.svg').default,
  };

  const kingImagePath = kingImagePaths[suit];
  const suitImagePath = Constants.suitImagePaths[suit];
  const kingStyle = {
    backgroundImage: `url(${kingImagePath})`,
  };

  return (
    <div className={`${styles.card}`} style={Constants.color333}>
      <div className={styles['card-royal']} style={kingStyle}></div>
      <div className={styles['card-middle']}>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
        <div className={styles['card-rank']}>K</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
      <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
        <div className={styles['card-rank']}>K</div>
        <div className={styles['card-suit']}>
          <img src={suitImagePath} />
        </div>
      </div>
    </div>
  )
}

export { Back, Joker, Ace};