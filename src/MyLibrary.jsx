import React from 'react';
import './assets/css/MyLibrary.css';


export const MyLibrary = () => {
  return (
    <div>
      This is my React library yea!!
      {/* <img src="./assets/spade.svg" /> */}
    </div>
  )
};

export const Ace = () => {
  return (
    <div className="card card-a">
      <div className="card-middle">
        <div className="card-suit">
          <img src={require('./assets/fa/spade.svg').default} />
        </div>
      </div>
      <div className="card-corner card-topleft">
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