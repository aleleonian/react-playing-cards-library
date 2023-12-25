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

export const Ace = () => {
  return (
    <div className={styles.card}>
      <div className="card-middle">
        <div className="suit">
          <img src={require('./assets/fa/spade.svg').default} />
        </div>
      </div>
      <div className="corner card-topleft">
        <div className="card-rank">A</div>
        <div className="card-suit">
          <img src={require('./assets/fa/spade.svg').default} />
        </div>
      </div>
      <div className="card-corner card-bottomright">
        <div className="card-rank">A</div>
        <div className="card-suit">
          <img src={require('./assets/fa/spade.svg').default} />
        </div>
      </div>
    </div>
  )
}