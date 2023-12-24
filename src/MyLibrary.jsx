import React from 'react';
import './css/cards.css';

export const MyLibrary = () => {
  return <div>This is my React library!</div>;
};

export const Ace = () => {
  return (
    <div className="card card-a" style="color: #333;">
      <div className="card-middle">
        <div className="card-suit" style="left: 50%; top: 50%; transform: translate(-50%, -50%) rotate(0)">
        <img src="./assets/fa/spade.svg" />
        </div>
      </div>
      <div className="card-corner card-topleft">
        <div className="card-rank">A</div>
        <div className="card-suit">
          <img src="./assets/fa/spade.svg" />

        </div>
      </div>
      <div className="card-corner card-bottomright">
        <div className="card-rank">A</div>
        <div className="card-suit">
          <img src="./assets/fa/spade.svg" />
        </div>
      </div>
    </div>
  )
}